import * as T from 'three';
import { getColorFromRamp } from './helpers';

const COLORS = [new T.Color(0, 0.5, 1), new T.Color(0.5, 0.5, 0), new T.Color(1, 0, 0)];
const COLORS2 = [new T.Color(0.3, 0.3, 0.3), new T.Color(0.5, 0.5, 0), new T.Color(1, 0, 0)];
const SELECT_COLOR = new T.Color(0.2, 0.7, 0.3);
const SELECT_COLOR_HL = new T.Color(0.2, 1, 0.5);
const BLOCK_WIDTH = 1.0;
const SPACING = 0.3;
const MIN_HEIGHT = 0.5;
const MAX_HEIGHT = 2;

export class TransactionsGrid {
    constructor(scene) {
        this.nodes = new Map();
        this.transactions = new Map();
        this.addressCount = 0;
        this.addressMap = new Map();
        this.loadedBlocks = new Map();
        this.scene = scene;
        this.blocks = [];
        this.canDrag = true;
        this.canHover = true;
        this.displayFrom;
        this.displayTo;
        this.displayAmount;
        this.maxRange = 0;
        this.allTimeMax = 0.01;
    }

    addNode(id) {
        this.nodes.set(id, new Node(id));
    }

    addTransaction(id1, id2, amount, time) {

        let node1 = this.nodes.get(id1);
        let node2 = this.nodes.get(id2);

        node1.addTransaction(node2, amount);
        node2.addTransaction(node1, amount);

        let key = [id1, id2].toString();

        if(!this.transactions.get(key)) {
            this.transactions.set(key, [])
        }
        this.transactions.get(key).push({
            amount: amount, 
            time: time
        });
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

    compareNodeNumTransactions(node1, node2) {
        if(node1.node.transactions.size > node2.node.transactions.size) {
            return 1
        } else if (node1.node.transactions.size < node2.node.transactions.size) {
            return -1
        } else {
            return 0
        }
    }

    compareNodeTotals(node1, node2) {
        let val1 = 0;
        let val2 = 0;

        node1.node.transactions.forEach(node => {
            node.forEach(t => {
                val1 += t
            })
        })
        node2.node.transactions.forEach(node => {
            node.forEach(t => {
                val2 += t
            })
        })

        if(val1 > val2) {
            return 1
        } else if (val1 < val2) {
            return -1
        } else {
            return 0
        }
    }

    loadData(data, startTime = -1, endTime = -1) {

        let transactions;

        if(startTime >= 0 && endTime >= 0) {
            transactions = data.transactions.filter((tr) => {
                let date = new Date(tr.timestamp);
                return date > startTime && date < endTime;
            })
            // console.log(transactions)
        } else {
            transactions = data.transactions;
        }
        // console.log(data)
        data.nodes.forEach((i) => this.addNode(i));
        transactions.forEach((t) => {
            if(this.nodes.get(t.from) && this.nodes.get(t.to)) {
                this.addTransaction(
                    t.from, 
                    t.to, 
                    Number(t.amount),
                    t.timestamp);
            }
        })

        let nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        nodeArray.sort(this.compareNodeTotals)
        nodeArray.reverse()
        console.log(nodeArray)
    }

    // load blocks close enough to position
    loadBlocks(x, y, arrayLen) {
        let nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        nodeArray.sort(this.compareNodeTotals)
        nodeArray.reverse()

        let arrayEndX = x + arrayLen < nodeArray.length ? x + arrayLen : nodeArray.length;
        let arrayEndY = y + arrayLen < nodeArray.length ? y + arrayLen : nodeArray.length;

        // console.log("getting max amount")
        // get max amount
        for(let i = 0; i < arrayLen; i++) {
            for(let k = 0; k < arrayLen; k++) {
                let amount = this.getTransactionsValue(nodeArray[i].id, nodeArray[k].id);
                if(amount > this.allTimeMax) {
                    this.allTimeMax = amount;
                }
            }
        }

        // console.log("loading blocks:", x, y)
        // console.log(arra yEndX, arrayEndY)
        for(let i = x; i < arrayEndX; i++) {
            for(let k = y; k < arrayEndY; k++) {
                if(!this.loadedBlocks.get([i, k].toString())) {
                    // console.log("adding block")
                    let transactions = this.getTransactions(nodeArray[i].id, nodeArray[k].id);
                    let amount = this.getTransactionsValue(nodeArray[i].id, nodeArray[k].id);
                    let newBlock = new TransactionBlock(nodeArray[i].id, nodeArray[k].id, transactions, amount, this.allTimeMax);
                    newBlock.setPosition(
                        (i - (arrayLen / 2)) * (BLOCK_WIDTH + SPACING), 
                        (k - (arrayLen / 2)) * (BLOCK_WIDTH + SPACING));
                        newBlock.recolor(amount / this.allTimeMax);
                    this.scene.add(newBlock.getCube());

                    // add to map
                    this.loadedBlocks.set([i, k].toString(), newBlock);
                    this.blocks.push(newBlock)
                }
            }
        }
    }

    unloadBlocks(x, y, arrayLen) {
        let nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        nodeArray.sort(this.compareNodeTotals)
        nodeArray.reverse()

        let arrayEndX = x + arrayLen < nodeArray.length ? x + arrayLen : nodeArray.length;
        let arrayEndY = y + arrayLen < nodeArray.length ? y + arrayLen : nodeArray.length;

        for(let i = x; i < arrayEndX; i++) {
            for(let k = y; k < arrayEndY; k++) {
                if(this.loadedBlocks.get([i, k].toString())) {
                    // add to map
                    let block = this.loadedBlocks.get([i, k].toString());
                    this.scene.remove(block.getCube())
                    // this.blocks.delete(block)
                    this.blocks.splice(this.blocks.indexOf(block), 1)
                    this.loadedBlocks.set([i, k].toString(), null)
                }
            }
        }
    }

    setBlocks() {
        this.blocks = [];
        let nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        nodeArray.sort(this.compareNode)
        nodeArray.reverse()
        let arrayLen = 20 // nodeArray.length
        // this.maxRange = (arrayLen / 2) * (BLOCK_WIDTH + SPACING)


        for(let i = 0; i < arrayLen; i++) {
            this.blocks.push([]);
            for(let k = 0; k < arrayLen; k++) {
                let amount = this.getTransactionsValue(nodeArray[i].id, nodeArray[k].id);
                if(amount > this.allTimeMax) {
                    this.allTimeMax = amount;
                }
            }
        }

        for(let i = 0; i < arrayLen; i++) {
            for(let k = 0; k < arrayLen; k++) {
                let transactions = this.getTransactions(nodeArray[i].id, nodeArray[k].id);
                let amount = this.getTransactionsValue(nodeArray[i].id, nodeArray[k].id);
                this.blocks[i][k] = new TransactionBlock(nodeArray[i].id, nodeArray[k].id, transactions, amount, this.allTimeMax);
                this.blocks[i][k].setPosition(
                    (i - (arrayLen / 2)) * (BLOCK_WIDTH + SPACING), 
                    (k - (arrayLen / 2)) * (BLOCK_WIDTH + SPACING));
                this.blocks[i][k].recolor(amount / this.allTimeMax);
                this.scene.add(this.blocks[i][k].getCube());
            }
        }
    }

    getBlocks() {
        return this.blocks;
        // return Array.from(this.loadedBlocks, ([id, node]) => ({id, node}));
    }

    clearData() {
        let nodeArray = Array.from(this.nodes, ([id, node]) => ({id, node}));
        for(let i = 0; i < nodeArray.length; i++) {
            for(let k = 0; k < nodeArray.length; k++) {
                this.scene.remove(this.blocks[i][k].getCube())
            }
        }
        this.blocks = [];
        this.nodes = new Map();
        this.transactions = new Map();
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

        let geometry = new T.BoxGeometry(BLOCK_WIDTH, (this.value / this.globalMax) * MAX_HEIGHT + MIN_HEIGHT, BLOCK_WIDTH);
        let material = new T.MeshPhongMaterial({ 
            color: this.color
        });
        this.cube = new T.Mesh(geometry, material);
        this.cube.position.y = (((this.value / this.globalMax) * MAX_HEIGHT + MIN_HEIGHT) / 2)
    }

    recolor(scale) {
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
    }

    addTransaction(otherNode, amount) {
        if(!this.transactions.get(otherNode.id)) {
            this.transactions.set(otherNode.id, [])
        }
        this.transactions.get(otherNode.id).push(amount);
    }
}