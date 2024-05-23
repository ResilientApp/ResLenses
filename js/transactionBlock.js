import * as T from 'three';
import { getColorFromRamp } from './helpers';

const COLORS = [new T.Color(0, 0.5, 1), new T.Color(0.5, 0.5, 0), new T.Color(1, 0, 0)];
const COLORS2 = [new T.Color(0.3, 0.3, 0.3), new T.Color(0.5, 0.5, 0), new T.Color(1, 0, 0)];
const SELECT_COLOR = new T.Color(0.2, 0.7, 0.3);
const SELECT_COLOR_HL = new T.Color(0.2, 1, 0.5);
const BLOCK_WIDTH = 1.0;
const SPACING = 0.3;
const MIN_HEIGHT = 0.2;
const MAX_HEIGHT = 2;
const LOAD_IN_FADE_SPEED = 0.1
const LOAD_OUT_FADE_SPEED = 0.04

export class TransactionsGrid {
    constructor(scene, camera) {
        this.nodes = new Map();
        this.transactions = new Map();
        this.addressCount = 0;
        this.loadedBlocks = new Map();
        this.loadingBlocks = new Map();
        this.loadedBars = new Map();
        this.blocksToClear = [];
        this.scene = scene;
        this.blocks = [];
        this.canDrag = true;
        this.canHover = true;
        this.displayFrom;
        this.displayTo;
        this.displayAmount;
        this.maxRange = 0;
        this.allTimeMax = 0.01;
        this.allTimeMaxNumTrans = 1;
        this.nodeArray;
        this.toggleSort = 0 // 1 = num transactions, 0 = transactions total
        // this.deleting = false
        this.isLoaded = false;
        this.dataToLoad;
        this.tempBlocks = [];
        this.viewTransitioning = false;
        this.camera = camera;
        this.allTimeMaxBar = 0.01
        this.allTimeMaxNumTransBar = 1
    }

    addNode(id) {
        this.nodes.set(id, new Node(id));
    }

    addTransaction(id1, id2, amount, time) {

        let node1 = this.nodes.get(id1);
        let node2 = this.nodes.get(id2);

        // node1.addTransaction(node2, amount);
        node2.addTransaction(node1, amount);

        let key = [id1, id2].toString();

        if(!this.transactions.get(key)) {
            this.transactions.set(key, [])
        }
        this.transactions.get(key).push({
            amount: amount, 
            time: time
        });

        let total = 0
        let count = 0
        this.transactions.get(key).forEach(t => {
            total += t.amount;
            count += 1
        })
        if(total > this.allTimeMax) {
            this.allTimeMax = total;
        }
        if(count > this.allTimeMaxNumTrans) {
            this.allTimeMaxNumTrans = count
        }

        if(node1.totalTransactionsValue > this.allTimeMaxBar) {
            this.allTimeMaxBar = node1. totalTransactionsValue
        }
        if(node2.totalTransactionsValue > this.allTimeMaxBar) {
            this.allTimeMaxBar = node2.totalTransactionsValue
        }
        if(node1.numTransactions > this.allTimeMaxNumTransBar) {
            this.allTimeMaxNumTransBar = node1.numTransactions
        }
        if(node2.numTransactions > this.allTimeMaxNumTransBar) {
            this.allTimeMaxNumTransBar = node2.numTransactions
        }
    }

    getTransactions(id1, id2) {
        let transaction = this.transactions.get([id1, id2].toString());
        if(transaction) {
            return transaction;
        } else {
            return [];
        }
    }

    getTransactionsValue(id1, id2) {
        let transaction = this.transactions.get([id1, id2].toString());
        if(transaction) {
            let sum = 0;
            transaction.forEach((i) => sum += i.amount);
            return sum;
        } else {
            return 0;
        }
    }

    getTotalNumTransactions(id1, id2) {
        let transaction = this.transactions.get([id1, id2].toString());
        if(transaction) {
            return transaction.length;
        } else {
            return 0;
        }
    }

    compareNodeNumTransactions(node1, node2) {
        if(node1.node.transactions && node2.node.transactions) {
            return node1.node.numTransactions - node2.node.numTransactions
        } else {
            return 0;
        }
    }

    compareNodeTotals(node1, node2) {
        let val1 = 0;
        let val2 = 0;

        node1.node.transactions.forEach(node => {
            node.forEach(t => {
                val1 += t.amount
            })
        })
        node2.node.transactions.forEach(node => {
            node.forEach(t => {
                val2 += t.amount
            })
        })

        return val1 - val2;
    }

    sortByLargestIntersections() {
        console.log("sort by inter")
        let transactionsArray = Array.from(this.transactions, ([key, value]) => ({key, value}));
        transactionsArray.sort((node1, node2) => {
            let t1 = node1.value
            let t2 = node2.value
            let s1 = 0
            let s2 = 0
            t1.forEach(t => {s1 += t.amount})
            t2.forEach(t => {s2 += t.amount})
            return s1 - s2
        })

        transactionsArray.reverse();
        // console.log(transactionsArray)

        let nodeList = []
        let nodeArray = []
        for(let i = 0; i < transactionsArray.length; i++) {
            let pair = transactionsArray[i].key.split(',')
            if(nodeList.indexOf(pair[0]) == -1) {
                nodeList.push(pair[0])
                nodeArray.push(this.nodes.get(pair[0]))
            }
            if(nodeList.indexOf(pair[1]) == -1) {
                nodeList.push(pair[1])
                nodeArray.push(this.nodes.get(pair[1]))
            }
        }

        this.nodeArray = nodeArray;
    }

    loadData(data, startTime = -1, endTime = -1) {
        this.dataToLoad = data
        // this.deleting = true;
        this.isLoaded = false;
        // this.createTempBlocks()
    }

    loadDataHelper(data, startTime = -1, endTime = -1) {
        let transactions;
        if(startTime >= 0 && endTime >= 0) {
            transactions = data.transactions.filter((tr) => {
                let date = new Date(tr.timestamp);
                return date > startTime && date < endTime;
            })
        } else {
            transactions = data.transactions;
        }

        data.nodes.forEach((i) => this.addNode(i));

        transactions.forEach((t) => {
            if(this.nodes.get(t.from) && this.nodes.get(t.to)) {
                this.addTransaction(
                    t.from, 
                    t.to, 
                    Number(t.amount),
                    t.timestamp);
            } else {
                console.log("failed to add trans")
            }
        })

        console.log("all time max num trans:", this.allTimeMaxNumTrans)
        // this.sortByLargestIntersections();

        this.nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        if(this.toggleSort == 1) {
            this.nodeArray.sort(this.compareNodeNumTransactions)
        } else {
            this.nodeArray.sort(this.compareNodeTotals)
        }
        
        this.nodeArray.reverse()
        console.log(this.nodeArray)
        console.log("all time max:", this.allTimeMax)   
        this.isLoaded = true;
    }

    // load blocks close enough to position
    loadBlocks(x, y, arrayLen, fullOpacity = false) {

        if(!this.isLoaded) {
            return
        }

        let arrayEndX = x + arrayLen < this.nodeArray.length ? x + arrayLen : this.nodeArray.length;
        let arrayEndY = y + arrayLen < this.nodeArray.length ? y + arrayLen : this.nodeArray.length;

        // console.log("loading blocks:", x, y)
        // console.log(arra yEndX, arrayEndY)
        for(let i = x; i < arrayEndX; i++) {
            for(let k = y; k < arrayEndY; k++) {
                if(!this.loadedBlocks.get([i, k].toString())) {
                    // console.log("adding block")
                    let transactions = this.getTransactions(this.nodeArray[i].id, this.nodeArray[k].id);
                    let numTrans = this.getTotalNumTransactions(this.nodeArray[i].id, this.nodeArray[k].id);
                    let transTotal = this.getTransactionsValue(this.nodeArray[i].id, this.nodeArray[k].id);

                    let amount = this.toggleSort == 1 ? numTrans : transTotal
                    let max = this.toggleSort == 1 ? this.allTimeMaxNumTrans : this.allTimeMax

                    let newBlock = new TransactionBlock(this.nodeArray[i].id, 
                        this.nodeArray[k].id, transactions, amount, max);
                    newBlock.setPosition(
                        (i) * (BLOCK_WIDTH + SPACING), 
                        (k) * (BLOCK_WIDTH + SPACING));

                    newBlock.pos = [i, k]
                    
                    if(!fullOpacity) {
                        let distX = Math.abs(this.camera.position.x - (i) * (BLOCK_WIDTH + SPACING))
                        let distZ = Math.abs(this.camera.position.z - (k) * (BLOCK_WIDTH + SPACING))
                        let dist = Math.sqrt(distX * distX + distZ * distZ)
                        // console.log(dist)
                        newBlock.getCube().material.opacity = (-LOAD_IN_FADE_SPEED * dist)            
                    }
                    
                    if(amount >=  this.allTimeMax) {
                        console.log(amount)
                    }
                    // newBlock.recolor(amount / newBlock.globalMax);
                    this.scene.add(newBlock.getCube());
                    console.log("load add")

                    // add to map
                    this.loadedBlocks.set([i, k].toString(), newBlock);
                    this.loadingBlocks.set([i, k].toString(), newBlock);
                    this.blocks.push(newBlock);
                }
            }
        }
    }

    createTempBlocks() {
        let unloadingBlocksList = Array.from(this.loadedBlocks, ([key, val]) => ({key, val}))
        unloadingBlocksList.forEach(pair => {
            let block = pair.val
            let tempBlock = new TransactionBlock(0, 0, [], 0, 1);
            tempBlock.setPosition(
                block.getCube().position.x, 
                block.getCube().position.z);
            // tempBlock.getCube().geometry.scale(0.96, 0.96, 0.96)
            tempBlock.recolor(0)


            this.scene.add(tempBlock.getCube())
            this.tempBlocks.push(tempBlock)
        })
    }

    clearTempBlocks() {
        this.tempBlocks.forEach(block => {
            this.scene.remove(block.getCube())
        })
        this.tempBlocks = []
    } 

    unloadBlocks(x, y, arrayLen) {

        if(!this.isLoaded) {
            return
        }

        let arrayEndX = x + arrayLen < this.nodeArray.length ? x + arrayLen : this.nodeArray.length;
        let arrayEndY = y + arrayLen < this.nodeArray.length ? y + arrayLen : this.nodeArray.length;

        for(let i = x; i < arrayEndX; i++) {
            for(let k = y; k < arrayEndY; k++) {
                if(this.loadedBlocks.get([i, k].toString())) {
                    // add to map
                    let block = this.loadedBlocks.get([i, k].toString());
                    this.scene.remove(block.getCube())
                    // this.blocks.delete(block)
                    this.blocks.splice(this.blocks.indexOf(block), 1)
                    // this.loadedBlocks.set([i, k].toString(), null);
                    this.loadedBlocks.delete([i, k].toString());
                    this.loadingBlocks.delete([i, k].toString());
                }
            }
        }
    }

    loadBars(x, arrayLen) {
        if(!this.isLoaded) {
            return
        }
        let arrayEndX = x + arrayLen < this.nodeArray.length ? x + arrayLen : this.nodeArray.length;

        for(let i = x; i < arrayEndX; i++) {
            if(!this.loadedBlocks.get([i, 0].toString())) {
                let total = 0
                let count = 0
                let transactions = []
                // console.log(this.nodeArray[i])   
                // console.log(this.nodeArray[i].node.transactions)
                let transList = Array.from(this.nodeArray[i].node.transactions, ([key, value]) => ({key, value}))
                transList.forEach(pair => {
                    // console.log(pair)
                    pair.value.forEach(val => {
                        total += val.amount
                        count += 1
                        transactions.push({
                            to: pair.key,
                            amount: val.amount,
                            time: val.time
                        })
                    })
                })

                let amount = this.toggleSort == 1 ? count : total
                let max = this.toggleSort == 1 ? this.allTimeMaxNumTransBar : this.allTimeMaxBar

                let newBlock = new TransactionBlock(this.nodeArray[i].id, null, transactions, amount, max);
                newBlock.setPosition(
                    (i) * (BLOCK_WIDTH + SPACING), 
                    (0) * (BLOCK_WIDTH + SPACING));
                
                // newBlock.recolor(amount / newBlock.globalMax);
                console.log(amount, max, amount/max)
                newBlock.pos = [i, 0]
                // newBlock.getCube().geometry.scale(0.8, 1, 0.8)
                this.scene.add(newBlock.getCube());
                // console.log("add bar blocks")
                // add to map
                this.loadedBlocks.set([i, 0].toString(), newBlock);
                this.loadingBlocks.set([i, 0].toString(), newBlock);
                this.blocks.push(newBlock)
            }
        }
    }

    getBlocks() {
        return this.blocks;
    }

    clearBlocks() {
        for(let i = 0; i < this.blocks.length; i++) {
            this.scene.remove(this.blocks[i].getCube())
            // this.blocksToClear.push(this.blocks[i])
        }
        // this.clearing = true;
        this.blocks = [];
        this.loadedBlocks = new Map();
    }

    clearBlocksHelper() {
        if(this.clearing) {
            console.log("clearing")
            if(this.blocksToClear.length > 0) {
                this.blocksToClear.forEach(block => {

                    this.scene.remove(block.getCube())
                })
                for(let i = 0; i < this.blocksToClear.length; i++) {
                    let block = this.blocksToClear[i];
                    if(block.getCube().material.opacity > 0) {
                        block.getCube().material.opacity -= 0.01;
                    }
                }
            } else {
                console.log("all blocks cleared")
                this.clearing = false;
                this.blocks = [];
                this.loadedBlocks = new Map();
            }
        }
    }

    clearData() {
        for(let i = 0; i < this.blocks.length; i++) {
            this.scene.remove(this.blocks[i].getCube())
        }
        this.blocks = [];
        this.loadedBlocks = new Map();
        this.nodes = new Map();
        this.transactions = new Map();
        this.nodeArray = [];
        this.allTimeMax = 0.01;
    }

    setVerticalOpacities() {
        let unloadingBlocksList = Array.from(this.loadedBlocks, ([key, val]) => ({key, val}))
        unloadingBlocksList.forEach(pair => {
            let block = pair.val
            let zVal = block.pos[1]
            block.getCube().material.opacity = 3 - (0.2 * zVal)
        })
    }

    update() {
        // this.clearBlocksHelper();
        if(!this.isLoaded) {
            console.log("unloading")
            let unloadingBlocksList = Array.from(this.loadedBlocks, ([key, val]) => ({key, val}))
            unloadingBlocksList.forEach(pair => {
                let block = pair.val
                let newScale = MIN_HEIGHT + ((block.yScale - MIN_HEIGHT) * 0.9);
                if(block.getCube().material.opacity > 0) {
                    block.getCube().material.opacity -= LOAD_OUT_FADE_SPEED;
                }
                if(block.yScale > MIN_HEIGHT) {
                    block.getCube().geometry.scale(1, 1 / block.yScale, 1);
                    if(newScale - 0.1 < MIN_HEIGHT) {
                        newScale = MIN_HEIGHT
                    }
                    block.yScale = newScale;
                    block.getCube().position.y = block.yScale / 2;
                    block.getCube().geometry.scale(1, block.yScale, 1);
                    block.recolor(((block.yScale / block.finalScale) * block.value) / this.allTimeMax)
                }
                if(newScale - 0.1 < MIN_HEIGHT && block.getCube().material.opacity <= 0) {
                    this.loadedBlocks.delete(pair.key);
                }
            })
            // finished deleting old data
            if(unloadingBlocksList.length == 0 && this.dataToLoad) {
                this.clearData();
                console.log("begin new data load")
                this.loadDataHelper(this.dataToLoad)
                this.isLoaded = true
            }
        } else {
            // console.log("loading")
            let loadingBlocksList = Array.from(this.loadingBlocks, ([key, val]) => ({key, val}))
            if(loadingBlocksList.length > 0) {
                // console.log("still blocks to load")
            }
            loadingBlocksList.forEach(pair => {
                let block = pair.val
                let newScale = block.yScale + ((block.finalScale - block.yScale) * 0.1);
                if(block.getCube().material.opacity <= 1.0) {
                    block.getCube().material.opacity += 0.05;
                }
                if(block.yScale < block.finalScale) {
                    block.getCube().geometry.scale(1, 1 / block.yScale, 1);
                    block.yScale = newScale;
                    block.getCube().position.y = block.yScale / 2;
                    block.getCube().geometry.scale(1, block.yScale, 1);


                    block.recolor(((block.yScale / block.finalScale) * block.value) / block.globalMax)
                }
                if(block.finalScale - newScale < 0.1 && block.getCube().material.opacity >= 1.0) {
                    // newScale = block.finalScale
                    // console.log(pair.key)
                    // let prevSize = this.loadedBlocks.size
                    block.getCube().material.opacity = 1.0
                    this.loadingBlocks.delete((pair.key).toString());
                    // console.log("block loaded")
                    // console.log("old size:", prevSize, this.loadedBlocks.size)
                }
            })
            if(loadingBlocksList.length == 0) {
                // console.log("cleared temp blocks", this.loadedBlocks.size)
                this.clearTempBlocks()
            } else {
                // console.log(loadingBlocksList)
            }
        }
    }

    beginTransition() {
        this.deleting = true;
    }
}

export class TransactionBlock {
    constructor(node1, node2, transactions, value, max) {
        this.transactions = transactions;
        this.value = value;
        this.globalMax = max;
        this.node1 = node1;
        this.node2 = node2;
        this.color = getColorFromRamp(COLORS, 0);
        this.hlColor = new T.Color("white");
        this.selected = false;
        this.yScale = MIN_HEIGHT;
        this.finalScale = (this.value / this.globalMax) * MAX_HEIGHT + MIN_HEIGHT
        this.pos = [0, 0]

        // let geometry = new T.BoxGeometry(BLOCK_WIDTH, (this.value / this.globalMax) * MAX_HEIGHT + MIN_HEIGHT, BLOCK_WIDTH);
        let geometry = new T.BoxGeometry(BLOCK_WIDTH, 1, BLOCK_WIDTH);

        let material = new T.MeshPhongMaterial({ 
            color: this.color,
            transparent: true,
            opacity: 1.0
        });
        this.cube = new T.Mesh(geometry, material);
        // this.cube.position.y = (((this.value / this.globalMax) * MAX_HEIGHT + MIN_HEIGHT) / 2)
        this.cube.geometry.scale(1, this.yScale, 1)
        this.cube.position.y = this.yScale / 2
        this.recolor(0)
    }

    recolor(scale) {
        // console.log(scale)
        if(scale == 0) {
            this.color = getColorFromRamp(COLORS2, 0)
        } else {
            this.color = getColorFromRamp(COLORS, scale);
        }
        this.cube.material.color = this.color;

        this.hlColor = getColorFromRamp([this.color, new T.Color("white")], 0.5);
    }
    
    setPosition(x, z) {
        this.cube.position.x = x;
        this.cube.position.z = z;
    }

    toggleHighlight(highlight) {
        if(highlight) {
            // console.log("highlight")
            if(this.select) {
                this.cube.material.color = SELECT_COLOR_HL
            } else {
                this.cube.material.color = this.hlColor;
            }
        } else {
            if(this.select) {
                this.cube.material.color = SELECT_COLOR
            } else {
                this.cube.material.color = this.color;
            }
        }
    }

    toggleSelect(select) {
        this.select = select;
        if(this.select) {
            this.cube.material.color = SELECT_COLOR_HL;
        }else {
            this.cube.material.color = this.color;
        }
    }

    getTransactions() {
        return this.transactions;
    }

    getTransactionsValue() {
        return this.value;
    }

    getCube() {
        return this.cube;
    }
}

export class Node {
    constructor(id) {
        this.id = id;
        this.transactions = new Map();
        this.numTransactions = 0;
        this.totalTransactionsValue = 0;
    }

    addTransaction(otherNode, amount, time = 0) {
        if(!this.transactions.get(otherNode.id)) {
            this.transactions.set(otherNode.id, [])
        }
        this.transactions.get(otherNode.id).push({
            amount: amount,
            time: time
        });
        this.numTransactions += 1
        this.totalTransactionsValue += amount
        // this.transactions.get(otherNode.id).push(amount);
    }
}