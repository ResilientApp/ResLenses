import * as T from 'three';
import { Container, TextBox } from './pageElements';

const CAMERA_SPEED = 15;
const CAMERA_DECEL_SPEED = 0.99;
const CAMERA_MAX_Y = 40;
const CAMERA_MIN_Y = 5;

const CHUNK_SIZE = 10;
const LOAD_RANGE = 5;
const UNLOAD_RANGE = 10;
const BLOCK_WIDTH = 1.0;
const SPACING = 0.3;
const ADDRESS_WIDTH = 10000
const ADDRESS_SPACING = 0
const HOVER_LIGHT_OPTIONS = ["yellow", 2, 10, 1]
const HL_LIGHT_OPTIONS = ["purple", 80, 20, 2] // color, strength, range, decay
const LIGHT_X_SHIFT = 1;

const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// t should be between 0 and 1
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export class SceneControl {
    constructor(scene, camera, transactionsGrid) {
        this.scene = scene;
        this.camera = camera;
        this.transactionsGrid = transactionsGrid;
        this.mouse = new T.Vector2();
        this.lastMouse = new T.Vector2();
        this.raycaster = new T.Raycaster();
        this.isMouseHold = false;
        this.cameraAccel = new T.Vector2();
        this.highlightedBlock = null;
        this.clickedBlock = null;
        this.selectedBlock = null;
        this.selectedDiv;
        this.hlLight;
        this.hoverLight;
        this.hoverLightExists = false;
        this.canScroll = true;
        this.loadedChunks = new Map();
        this.isDataLoaded = false;
        this.cameraMode = 0; // 0 is grid, 1 is bar view
        this.transitioning = false;
        this.resettingCamera = false;
        this.sideBarTransactionsToLoad = []
        this.transitionSpeed = 0.008;

        this.cameraGridView = {
            position: new T.Vector3(0, 10, 0),
            lookAtDelta: new T.Vector3(0, -1, 0),
        };
        this.cameraBarView = {
            position: new T.Vector3(0, 2, 8),
            lookAtDelta: new T.Vector3(0, -1, -3),
        }
        this.storedCamera;
        this.cameraTVal = 0;

        this.addressDiv1 = document.createElement('div');
        this.addressDiv1.id = "addressDiv1";
        document.body.appendChild(this.addressDiv1);

        // this.addressText1 = new TextBox("addressText1", "addressDiv1", "Fake Address 1")

        this.addressDiv2 = document.createElement('div');
        this.addressDiv2.id = "addressDiv2";
        document.body.appendChild(this.addressDiv2);

        this.selects = []

        // this.addressText2 = new TextBox("addressText2", "addressDiv2", "Fake Address 2")
    }

    mouseUpdate() {
        if(this.lastMouse.x != this.mouse.x || this.lastMouseY != this.mouse.y) {
            // console.log("movement")
            this.updateHighlight();
        }
        // mouse position update update
        this.lastMouse.x = this.mouse.x;
        this.lastMouse.y = this.mouse.y;

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        // console.log(event.clientX, event.clientY)
        // this.addressDiv.style.left = (event.clientX-200) + "px"
        // this.addressDiv.style.top = (event.clientY-50) + "px"
    }

    updateHighlight() {
        // object highlight
        let blocks = this.transactionsGrid.getBlocks();
        let cubeMeshes = blocks.flat().map((block) => block.getCube());
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // find first object intersecting with mouse, then sets it to highlight, unhighlight other blocks
        let intersect = this.raycaster.intersectObjects(cubeMeshes, false);
        if (intersect.length > 0 && this.transactionsGrid.canHover) {
            let intersectObj = intersect[0].object;
            blocks.flat().forEach(block => {
                if (intersectObj == block.getCube()) {
                    block.toggleHighlight(true);
                    this.highlightedBlock = block;
                }
                else {
                    block.toggleHighlight(false);
                }
            })
        }
        else {
            if (this.highlightedBlock) {
                this.highlightedBlock.toggleHighlight(false);
            }
            this.highlightedBlock = null;
        }

        // update highlight ui
        if (this.highlightedBlock && this.transactionsGrid.displayFrom) {
            this.transactionsGrid.displayFrom.label.innerHTML =
                "From: " + this.highlightedBlock.node1
            this.transactionsGrid.displayTo.label.innerHTML =
                "To: " + this.highlightedBlock.node2
            if(this.transactionsGrid.toggleSort == 1) {
                this.transactionsGrid.displayAmount.label.innerHTML =
                "Number of Transactions: " + this.highlightedBlock.getTransactionsValue();
            }
            else {
                this.transactionsGrid.displayAmount.label.innerHTML =
                "Transactions Sum: " + this.highlightedBlock.getTransactionsValue();
            }
            let vector = this.highlightedBlock.getCube().position.clone();
            vector.y += this.highlightedBlock.yScale / 2

            vector.project( this.transactionsGrid.camera );

            let x = (vector.x + 1) * window.innerWidth / 2;
            let y = ((1 - vector.y)) * window.innerHeight / 2;

            // console.log(x, y)

            this.addressDiv1.style.left = (x-ADDRESS_WIDTH - ADDRESS_SPACING) + "px"
            this.addressDiv1.style.top = (y) + "px"
            // this.addressText1.label.innerHTML = "To: " + this.highlightedBlock.node2

            this.addressDiv2.style.left = (x-(ADDRESS_WIDTH / 2)) + "px"
            this.addressDiv2.style.top = (y-(ADDRESS_WIDTH / 2) - ADDRESS_SPACING) + "px"
            // this.addressText2.label.innerHTML = "From: " + this.highlightedBlock.node1

            if(!this.hoverLightExists) {
                let shift = this.cameraMode == 1 ? LIGHT_X_SHIFT : 0
                this.hoverLight = new T.PointLight(HOVER_LIGHT_OPTIONS[0], HOVER_LIGHT_OPTIONS[1], 
                    HOVER_LIGHT_OPTIONS[2], HOVER_LIGHT_OPTIONS[3]);
                this.hoverLight.position.x = this.highlightedBlock.getCube().position.x;
                this.hoverLight.position.y = this.highlightedBlock.getCube().position.y + (this.highlightedBlock.yScale / 2) + 1.0;
                this.hoverLight.position.z = this.highlightedBlock.getCube().position.z + shift;
                this.scene.add(this.hoverLight);
                this.hoverLightExists = true
            }
        } else {
            this.addressDiv1.style.left = "-100000px"
            this.addressDiv1.style.top = "-100000px"
            // this.addressText1.label.innerHTML = "To: " + this.highlightedBlock.node2

            this.addressDiv2.style.left = "-100000px"
            this.addressDiv2.style.top = "-10000px"

            if(this.hoverLightExists) {
                this.scene.remove(this.hoverLight);
                this.hoverLightExists = false;
            }
        }

    }

    onMouseMove(event) {
        // mouse update
        this.mouseUpdate()

        // this.updateHighlight();

        
        if (this.isMouseHold && this.transactionsGrid.canDrag) {
            let deltaX = this.mouse.x - this.lastMouse.x;
            let deltaY = this.mouse.y - this.lastMouse.y;

            this.camera.position.x += -deltaX * CAMERA_SPEED;
            this.camera.position.z += deltaY * CAMERA_SPEED * (window.innerHeight / window.innerWidth);

            this.cameraAccel.x = deltaX;
            this.cameraAccel.y = deltaY;

            this.bindCamera();
        }
    }

    onMouseDown(event) {
        this.mouseUpdate()
        this.isMouseHold = true;
        // console.log("selects", this.selects)
        // this.selects.forEach(select => {
        //     if(select.showing) {
        //         console.log(select)
        //         select.showing = false;
        //         select.hideOptions();
        //     }
        // })
    }

    onMouseClick(event) {
        this.mouseUpdate()
    }

    onMouseDblClick(event) {
        // mouse update
        this.mouseUpdate()
        this.isMouseHold = false;
        this.transactionsGrid.canDrag = true;
        if (this.clickedBlock && this.transactionsGrid.canHover && this.highlightedBlock) {
            // console.log(this.clickedBlock.pos)
            // console.log(this.transactionsGrid.nodeArray[this.clickedBlock.pos[0]])
            // console.log(this.transactionsGrid.nodeArray[this.clickedBlock.pos[]])
            if (this.selectedBlock) {
                this.selectedBlock.toggleSelect(false);
            }

            this.selectedBlock = this.clickedBlock;

            let sideDiv = document.getElementById("sideDiv");
            sideDiv.style.width = "300px";
            sideDiv.style.padding = "10px";
        
            let shift = this.cameraMode == 1 ? LIGHT_X_SHIFT : 0
            this.hlLight = new T.PointLight(HL_LIGHT_OPTIONS[0], HL_LIGHT_OPTIONS[1], HL_LIGHT_OPTIONS[2], HL_LIGHT_OPTIONS[3]);
            this.hlLight.position.x = this.selectedBlock.getCube().position.x;
            this.hlLight.position.y = this.selectedBlock.getCube().position.y + (this.selectedBlock.yScale / 2) + 1.0;
            this.hlLight.position.z = this.selectedBlock.getCube().position.z + shift;
            this.scene.add(this.hlLight);

            if (this.selectedDiv) {
                this.selectedDiv.removeDiv();
            }

            // add to side bar
            this.selectedDiv = new Container("transaction select", "sideDiv", true);
            let displayFrom = new TextBox("transaction from", "sideDiv", "From: " + 
                String(this.clickedBlock.node1).substring(0, 20) + "...");
            
            if(this.clickedBlock.node2) {
                let displayTo = new TextBox("transaction to", "sideDiv", "To: " + 
                    String(this.clickedBlock.node2).substring(0, 20) + "...");
                this.selectedDiv.addBlock(displayFrom, displayTo)
            } else {
                this.selectedDiv.addBlock(displayFrom)
            }
            // let count = 0;
            this.clickedBlock.transactions.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
            });

            // console.log(this.clickedBlock.transactions)
            // let count = 0
            this.clickedBlock.transactions.forEach(t => {
                this.sideBarTransactionsToLoad.push(t);
                // this.addTransactionsToSideBar(t)
                // count += 1
            })
            if (this.sideBarTransactionsToLoad.length == 0) {
                let transactionContainer = new Container("tCont", "sideDiv", true);
                let text = new TextBox("transaction", "sideDiv", "Amount: NA");
                transactionContainer.addBlock(text);
                this.selectedDiv.addBlock(transactionContainer)
            }

            this.selectedBlock.toggleSelect(true);
        }
    }

    addTransactionsToSideBar(t) {
        if (t.amount > 0) {
            let transactionContainer = new Container("tCont", "sideDiv", true);
            let toText;
            if(t.to) {
                // console.log(t.to)
                toText = new TextBox("transaction to inner", "sideDiv", "To: " + String(t.to));
            }
            let text = new TextBox("transaction amount", "sideDiv", "Amount: " + String(t.amount));
            let text2;
            
            if(this.transactionsGrid.dataType == 0) {
                let date = new Date(t.time);
                let hourText = String(date.getHours());
                if(hourText.length == 1) {
                    hourText = "0" + hourText;
                }
                let minuteText = String(date.getMinutes());
                if(minuteText.length == 1) {
                    minuteText = "0" + minuteText;
                }
                let secondText = String(date.getSeconds());
                if(secondText.length == 1) {
                    secondText = "0" + secondText;
                }
                let timeText = String(date.getFullYear()) + "-" + String(date.getMonth()) + "-" + String(date.getDay()) + " " + 
                hourText + ":" + minuteText + ":" + secondText;
                if(timeText == "NaN-NaN-NaN NaN:NaN:NaN" ) {
                    timeText = "N/A"
                }
                // console.log(t.time)
                text2 = new TextBox("transaction time", "sideDiv", "Time: " + timeText);
            } else {
                let timeText = t.time;
                // console.log(t.time)
                text2 = new TextBox("transaction time", "sideDiv", "Time: " + timeText);
            }
            
            if(toText) {
                transactionContainer.addBlock(toText, text, text2);
            } else {
                transactionContainer.addBlock(text, text2);
            }
            this.selectedDiv.addBlock(transactionContainer)
            // count += 1;
        }
    }

    onWheelEvent(event) {
        if(!this.canScroll) {
            return;
        }
        let dx = event.deltaX;
        let dy = event.deltaY;
        // console.log(dx, dy)
        if (dy > 0 && this.camera.position.y < CAMERA_MAX_Y) {
            if (this.cameraMode == 0) {
                this.camera.position.y += 0.2;
                this.updateHighlight();
            }
        } else if (dy < 0 && this.camera.position.y > CAMERA_MIN_Y) {
            if (this.cameraMode == 0) {
                this.camera.position.y -= 0.2;
                this.updateHighlight();
            }
        }
    }

    unselectBlock() {
        if(this.clickedBlock) {
            this.clickedBlock.toggleSelect(false);
            let sideDiv = document.getElementById("sideDiv");
            sideDiv.style.width = "0px";
            sideDiv.style.padding = "10px 0px 10px 0px";
            this.scene.remove(this.hlLight);
        }
        this.sideBarTransactionsToLoad = []
    }

    onMouseUp(event) {
        this.isMouseHold = false;
        this.transactionsGrid.canDrag = true;
        if (this.lastMouse.x == this.mouse.x && this.lastMouse.y == this.mouse.y) {
            this.unselectBlock();
            this.clickedBlock = this.highlightedBlock;
        }
    }

    update() {
        // updates to side bar
        if(this.sideBarTransactionsToLoad.length > 0) {
            let transaction = this.sideBarTransactionsToLoad.shift()
            this.addTransactionsToSideBar(transaction)
        }
        // camera movement
        if (this.transitioning) {
            this.cameraTVal += this.transitionSpeed;
            if (this.cameraTVal >= 1) {
                this.transitioning = false;
                this.resettingCamera = false;
                this.cameraTVal = 1
                // console.log("transition:", 1)
            }

            let toCamera;
            if(this.cameraMode == 0) {
                toCamera = this.cameraGridView
            } else {
                toCamera = this.cameraBarView
            }

            // console.log(this.cameraGridView.position, this.cameraBarView.position)
            let posX = lerp(this.storedCamera.position.x, toCamera.position.x, this.cameraTVal);
            let posY = lerp(this.storedCamera.position.y, toCamera.position.y, this.cameraTVal);
            let posZ = lerp(this.storedCamera.position.z, toCamera.position.z, this.cameraTVal);

            let lookX = lerp(this.storedCamera.lookAtDelta.x, toCamera.lookAtDelta.x, this.cameraTVal);
            let lookY = lerp(this.storedCamera.lookAtDelta.y, toCamera.lookAtDelta.y, this.cameraTVal);
            let lookZ = lerp(this.storedCamera.lookAtDelta.z, toCamera.lookAtDelta.z, this.cameraTVal);

            // console.log(posX, posY, posZ)
            // console.log(lookX, lookY, lookZ)
            if(this.resettingCamera) {
                this.camera.position.set(posX, posY, posZ)
            } else {
                this.camera.position.set(this.camera.position.x, posY, posZ)
            }
            this.camera.lookAt(this.camera.position.x + lookX, this.camera.position.y + lookY, this.camera.position.z + lookZ)

            // this.transitioning = false;

            if (this.cameraTVal >= 1) {
                this.cameraTVal = 0;
                // console.log("transition2:", 1)
            }
        } else {
            if (!this.isMouseHold) {
                this.cameraAccel.x *= CAMERA_DECEL_SPEED;
                this.cameraAccel.y *= CAMERA_DECEL_SPEED;

                if (Math.abs(this.cameraAccel.x) < 0.005) {
                    this.cameraAccel.x = 0;
                }
                if (Math.abs(this.cameraAccel.y) < 0.005) {
                    this.cameraAccel.y = 0;
                }

                this.camera.position.x += -this.cameraAccel.x;
                this.camera.position.z += this.cameraAccel.y;

                // if(this.cameraAccel.x > 0 || this.cameraAccel.y > 0) {
                //     // console.log("camera movement")
                //     this.updateHighlight();
                // }

                this.bindCamera();
            }

            if (this.cameraMode == 1) {
                this.camera.position.z = this.cameraBarView.position.z
            }
        }

        // chunk loading

        if (this.isDataLoaded && this.transactionsGrid.isLoaded) {
            let chunkSizeTotal = (BLOCK_WIDTH + SPACING) * CHUNK_SIZE

            for (let i = -LOAD_RANGE; i <= LOAD_RANGE; i++) {
                for (let k = -LOAD_RANGE; k <= LOAD_RANGE; k++) {
                    let curChunkX = Math.floor(this.camera.position.x / chunkSizeTotal) + i
                    let curChunkZ = Math.floor(this.camera.position.z / chunkSizeTotal) + k

                    if (curChunkX >= 0 && curChunkZ >= 0) {
                        if (!this.loadedChunks.get([curChunkX, curChunkZ].toString())) {
                            // console.log("new chunk loaded:", curChunkX, curChunkZ)
                            this.loadedChunks.set([curChunkX, curChunkZ].toString(), true)
                            if (this.cameraMode == 0) {
                                this.transactionsGrid.loadBlocks(curChunkX * CHUNK_SIZE, curChunkZ * CHUNK_SIZE, CHUNK_SIZE, false)
                            } else {
                                this.transactionsGrid.loadBars(curChunkX * CHUNK_SIZE, CHUNK_SIZE)
                            }
                        }
                    }
                }
            }

            // unload chunks

            let curChunkX = Math.floor(this.camera.position.x / chunkSizeTotal)
            let curChunkZ = Math.floor(this.camera.position.z / chunkSizeTotal)

            let chunksArr = Array.from(this.loadedChunks)
            chunksArr.forEach(chunk => {
                let coords = chunk[0].split(',').map(v => Number(v))
                if (this.loadedChunks.get([coords[0], coords[1]].toString())) {
                    if (Math.abs(coords[0] - curChunkX) > UNLOAD_RANGE || Math.abs(coords[1] - curChunkZ) > UNLOAD_RANGE) {
                        // console.log("unloading block", coords[0], coords[1])
                        this.loadedChunks.set([coords[0], coords[1]].toString(), false)
                        this.transactionsGrid.unloadBlocks(coords[0] * CHUNK_SIZE, coords[1] * CHUNK_SIZE, CHUNK_SIZE)
                        // this.transactionsGrid.unloadBlocks(coords[0]*CHUNK_SIZE, coords[1]*CHUNK_SIZE, CHUNK_SIZE)
                    }
                }
            })
        }

        this.bindCamera()
    }

    clearChunks() {
        this.loadedChunks = new Map();
    }

    setCamera(toggle) {
        this.unselectBlock();
        this.transitionSpeed = 0.008
        this.transitioning = true;
        if (toggle == 0) { // top down grid view
            this.storedCamera = {
                position: this.camera.position.clone(),
                lookAtDelta: this.cameraBarView.lookAtDelta
            }
            this.addressDiv1.style.height = "2px"
            this.addressDiv2.style.height = "2px"
        }
        else if (toggle == 1) { // side bar view
            this.storedCamera = {
                position: this.camera.position.clone(),
                lookAtDelta: this.cameraGridView.lookAtDelta
            }
            this.addressDiv1.style.height = "0px"
            this.addressDiv2.style.height = "0px"
        }
        this.cameraMode = toggle;
    }

    resetCamera() {
        this.transitioning = true;
        this.resettingCamera = true;
        this.transitionSpeed = 0.05
        this.storedCamera = {
            position: this.camera.position.clone(),
            lookAtDelta: this.cameraGridView.lookAtDelta
        }
        this.cameraAccel = new T.Vector2();
    }

    bindCamera() {
        if (this.isDataLoaded) {
            if (!this.transactionsGrid.nodeArray) {
                // console.log("no array yet")
                return
            }
            let maxCameraRange = (BLOCK_WIDTH + SPACING) * this.transactionsGrid.nodeArray.length
            if (this.camera.position.x > maxCameraRange) {
                this.camera.position.x = maxCameraRange
            }
            if (this.camera.position.x < 0) {
                this.camera.position.x = 0
            }
            if (this.camera.position.z > maxCameraRange) {
                this.camera.position.z = maxCameraRange
            }
            if (this.camera.position.z < 0) {
                this.camera.position.z = 0
            }
        }
    }
}