import { Button, Checkbox, Slider, TextBox, Element, Container, Select, CustomSelect } from "./pageElements"
import { getData } from './endpoint.js';
// import * as T from 'three';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';


const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const helpText = 
 "This is a heatmap representing UTXO transactions activity between pairs of addresses. " +
 "In grid view addresses are layed out as From/To by the X and Y axis. " +
 "Bar view can be selected to summarize total activty per address." +
 "<br /> <br />" + 
 "<b><u> Camera Controls</u></b>: " + 
 "The viewer may drag click to move the camera around, scroll up and down to zoom in/out, " + 
 "and double click on any block to see further details on activity between two addresses. " +
 "Normal clicking will deselect the currently focused block." + 
 "<br /> <br />" + 
 "<b><u> Left Tab</u></b>: " + 
 "This tab will appear when an activity bar is selected. " + 
 "Displays detailed information on the focused block " + 
 "<br /> <br />" + 
 "<b><u> Configurations</u></b>: " + 
 "The bottom bar holds a set buttons that allow for reorganization and reconfiguration of the data. " +
 "Play around with them to see how else this data can be visualized. " + 
 "<br /> <br /> " +
 "Click this tab to hide."

function getDate(value) {
    return MONTHS[value%MONTHS.length] + " " + String(YEARS[Math.floor(value/MONTHS.length)])
}

function getDateObj(value) {
    let month = value%MONTHS.length;
    let year = YEARS[Math.floor(value/MONTHS.length)];
    let date = new Date(year, month);
    // console.log(date);
    return date;
}

export function initUI(transactionsGrid, control, data, tooltips, resDBLink, ethLink) {
    /* UI */
    let titleDiv = document.createElement('div');
    titleDiv.id = "titleDiv";
    document.body.appendChild(titleDiv);

    let helpDiv = document.createElement('div');
    helpDiv.id = "helpDiv";
    document.body.appendChild(helpDiv)
    helpDiv.onmousedown = () => {
        transactionsGrid.canDrag = false;
    }
    helpDiv.onmouseenter = () => {
        transactionsGrid.canHover = false;
        control.canScroll = false;
    }
    helpDiv.onmouseleave = () => {
        transactionsGrid.canHover = true;
        control.canScroll = true;
    }

    let title = new TextBox("title", "titleDiv", "RES LENSES");

    let sideDiv = document.createElement('div');
    sideDiv.id = "sideDiv";
    document.body.appendChild(sideDiv);
    sideDiv.style.width = "0px";
    sideDiv.onmouseenter = () => {
        transactionsGrid.canHover = false;
        control.canScroll = false;
    }
    sideDiv.onmouseleave = () => {
        transactionsGrid.canHover = true;
        control.canScroll = true;
    }

    let topDiv = document.createElement('div');
    topDiv.id = "topDiv";
    topDiv.onmousedown = () => {
        transactionsGrid.canDrag = false;
    }
    document.body.appendChild(topDiv);

    let bottomDiv = document.createElement('div');
    bottomDiv.id = "bottomDiv";
    // bottomDiv.classList.add("horizontalContainer");
    bottomDiv.onmousedown = () => {
        transactionsGrid.canDrag = false;
    }
    bottomDiv.onmouseenter = () => {
        transactionsGrid.canHover = false;
    }
    bottomDiv.onmouseleave = () => {
        transactionsGrid.canHover = true;
    }
    document.body.appendChild(bottomDiv);

    let allSelects = []
    let unlockMovement = () => {
        transactionsGrid.canDrag = true;
        transactionsGrid.canHover = true;
    }

    let innerBottomDiv = new Container("innerBottom", "bottomDiv", false)

    let text1 = new TextBox("from display", "topDiv", "From: NA");
    transactionsGrid.displayFrom = text1;
    let text2 = new TextBox("to display", "topDiv", "To:   NA");
    transactionsGrid.displayTo = text2;
    let text3 = new TextBox("amount display", "topDiv", "Total: NA");
    transactionsGrid.displayAmount = text3;

    let numMonths = Number(YEARS.length) * Number(MONTHS.length) - 1;

    // let dateRangeText = new TextBox("date range", "bottomDiv", "");

    // let sliderDiv = new Element("sliderBar", "bottomDiv");
	
    // let slider1 = new Slider("Slider 1", "bottomDiv", 0, numMonths, 1, 0);
    // let slider2 = new Slider("Slider 2", "bottomDiv", 0, numMonths, 1, numMonths);
    
    // slider1.label.innerHTML = getDate((Number(numMonths) - 5));
    // slider2.label.innerHTML = getDate(numMonths);

    // slider1.slider.oninput = () => {
    //     if(slider1.slider.value > Number(slider2.slider.value) - 1) {
    //         slider2.slider.value = Number(slider1.slider.value) + 1;
    //     }
    //     if(slider1.slider.value > numMonths-1) {
    //         slider1.slider.value = numMonths-1;
    //     }
    //     updateBar()
    // }

    // slider2.slider.oninput = () => {
    //     if(slider1.slider.value > Number(slider2.slider.value) - 1) {
    //         slider1.slider.value = Number(slider2.slider.value) - 1;
    //     }
    //     if(slider2.slider.value < 1) {
    //         slider2.slider.value = 1;
    //     }
    //     updateBar()
    // }

    // let updateButton = new Button("Update", "bottomDiv", () => {
    //     updateGrid();
    // })

    // let switchDataButton = new Button("SwitchButton", "innerBottom")
    // switchDataButton.button.innerHTML = "Switch to ETH";
    // switchDataButton.button.addEventListener("click", () => {
    //     let file;
    //     let buttonName;
    //     if(switchDataButton.button.innerHTML == "Switch to RESDB") {
    //         buttonName = "Switch to ETH";
    //         file = "http://localhost:8080/getData_RESDB"
    //     } else if(switchDataButton.button.innerHTML == "Switch to ETH") {
    //         buttonName = "Switch to RESDB";
    //         file = "http://localhost:8080/getData_ETH"
    //     } else {
    //         return
    //     }
    //     switchDataButton.button.innerHTML = "..."
    //     control.isDataLoaded = false;
    //     getData(file, (data1) => {
    //         // transactionsGrid.clearData();
    //         control.isDataLoaded = true;
    //         control.loadedChunks = new Map();
    //         transactionsGrid.loadData(data1);
    //         switchDataButton.button.innerHTML = buttonName;
    //     })
    // });

    let refocusButton = new Button("Return to Origin", "innerBottom", () => {
        control.resetCamera();
    })
    refocusButton.setToolTip(tooltips.resetPosition, "topTooltip")

    // data select
    let dataFunc1 = () => {
        let file = resDBLink
        control.isDataLoaded = false;
        unlockMovement();
        getData(file, (data1) => {
            // transactionsGrid.clearData();
            control.isDataLoaded = true;
            control.loadedChunks = new Map();
            transactionsGrid.dataType = 0;
            transactionsGrid.loadData(data1);
        })
    }
    let dataFunc2 = () => {
        let file = ethLink
        control.isDataLoaded = false;
        unlockMovement();
        getData(file, (data1) => {
            // transactionsGrid.clearData();
            control.isDataLoaded = true;
            control.loadedChunks = new Map();
            transactionsGrid.dataType = 1;
            transactionsGrid.loadData(data1);
        })
    }
    let dataSelect = new CustomSelect("SelectData", "innerBottom", "Data", 
        [["ResDB", dataFunc1, tooltips.resDBData], ["Ethereum", dataFunc2, tooltips.ethData]]
    )
    allSelects.push(dataSelect)
    dataSelect.button.setToolTip(tooltips.dataSelect, "topTooltip")

    // sort select
    let sortFunc1 = () => {
        transactionsGrid.toggleSort = 0;
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        unlockMovement();
    }
    let sortFunc2 = () => {
        transactionsGrid.toggleSort = 1;
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        unlockMovement();
    }
    let sortFunc3 = () => {
        transactionsGrid.toggleSort = 2;
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        unlockMovement();
    }
    let sortSelect = new CustomSelect("sortSelect", "innerBottom", "Sort by", [
        ["Transactions Total", sortFunc1, tooltips.transactionTotal], 
        ["Number of Transactions", sortFunc2, tooltips.numTransactions], 
        ["Largest Transaction", sortFunc3, tooltips.largestTransaction]])
    allSelects.push(sortSelect)
    sortSelect.button.setToolTip(tooltips.sortSelect, "topTooltip")


    // view select
    let viewFunc1 = () => {
        control.setCamera(0);
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        control.clearChunks();
        unlockMovement();
    }
    let viewFunc2 = () => {
        control.setCamera(1);
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        control.clearChunks();
        unlockMovement();
    }
    let viewSelect = new CustomSelect("ViewSelect", "innerBottom", "View", 
        [["Grid", viewFunc1, tooltips.grid],
         ["Bar", viewFunc2, tooltips.bar]]
    )
    allSelects.push(viewSelect)
    viewSelect.button.setToolTip(tooltips.viewSelect, "topTooltip")


    // scale select
    // let scaleFunc1 = () => {
    //     console.log("scale1")
    //     unlockMovement();
    // }
    // let scaleFunc2 = () => {
    //     console.log("scale2")
    //     unlockMovement();
    // }
    // let scaleSelect = new CustomSelect("ScaleSelect", "innerBottom", "Scale",
    //     [["Linear", scaleFunc1, tooltips.linear], 
    //     ["Log", scaleFunc2, tooltips.log]])
    // allSelects.push(scaleSelect)
    // scaleSelect.button.setToolTip(tooltips.scaleSelect, "topTooltip")

    // symmetry select
    let symmFunc1 = () => {
        console.log("func 1")
        transactionsGrid.symmetrical = true;
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        unlockMovement();
    }
    let symmFunc2 = () => {
        console.log("func 2")
        transactionsGrid.symmetrical = false;
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        unlockMovement();
    }
    let symmetrySelect = new CustomSelect("SymmetrySelect", "innerBottom", "Symmetry",
        [["False", symmFunc2, tooltips.asymmetric],
         ["True", symmFunc1, tooltips.symmetric]])
    symmetrySelect.button.setToolTip(tooltips.symmetrySelect, "topTooltip")

    let showHelp = false;
    let helpButton = new TextBox("Help button", "helpDiv", "?");
    helpDiv.style.height = "calc(100% - 260px)";
    helpDiv.style.textAlign = "left"
    helpButton.label.innerHTML = helpText;
    helpButton.div.style.fontSize = "16px"
    helpDiv.style.overflowY = 'scroll';
    showHelp = true;
    helpButton.div.onmousedown = () => {
        if(!showHelp) {
            helpDiv.style.height = "calc(100% - 260px)";
            helpDiv.style.textAlign = "left"
            helpButton.label.innerHTML = helpText;
            helpButton.div.style.fontSize = "16px"
            helpDiv.style.overflowY = 'scroll';
            showHelp = true;
        } else {
            helpDiv.style.height = "20px";
            helpDiv.style.textAlign = "center"
            helpButton.label.innerHTML = "?";
            helpButton.div.style.fontSize = "30px"
            helpDiv.style.overflowY = 'hidden';
            showHelp = false;
        }
    }
    // updateBar()

    // function updateBar(){
    //     slider1.label.innerHTML = getDate(slider1.slider.value);
    //     slider2.label.innerHTML = getDate(slider2.slider.value);

    //     let percent1 = (slider1.slider.value / numMonths) * 100;
    //     let percent2 = (slider2.slider.value / numMonths) * 100;
        
    //     sliderDiv.div.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;

    //     dateRangeText.label.innerHTML = getDate(slider1.slider.value) + " - " + getDate(slider2.slider.value)
    // }

    // function updateGrid() {
    //     let startTime = getDateObj(slider1.slider.value)
    //     let endTime = getDateObj(slider2.slider.value)

    //     transactionsGrid.clearData();
    //     transactionsGrid.loadData(data, startTime, endTime)
    //     transactionsGrid.setBlocks();
    // }

    // const loader = new FontLoader();

    // loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    //     const geometry = new TextGeometry( 'Hello three.js!', {
    //         font: font,
    //         size: 2,
    //         depth: 0.01,
    //         curveSegments: 12,

    //         bevelThickness: 0.1,
    //         bevelSize: 0.1,
    //         bevelEnabled: true
    //     } );

    //     let material = new T.MeshPhongMaterial({ 
    //         color: "red"
    //     });
    
    //     let mesh = new T.Mesh(geometry, material);
    
    //     // mesh.rotateZ(Math.PI / 2)
    //     // mesh.rotateY(Math.PI)
    //     mesh.rotateX(Math.PI / 4)
    //     // mesh.rotateZ(Math.PI)
    
    //     mesh.position.set(-2, -5, -2);
    
    //     transactionsGrid.scene.add(mesh)

    //     console.log( "font loaded:", font );

    // } );

    // const font = loader.load(
    //     // resource URL
    //     'fonts/helvetiker_bold.typeface.json',

    //     // onLoad callback
    //     function ( font ) {
    //         // do something with the font
    //         console.log( "font loaded:", font );

    //         // let geometry = new TextGeometry( 'Hello three.js!', {
    //         //     font: font,
    //         //     size: 80
    //         //     } );
        
    //         // let material = new T.MeshPhongMaterial({ 
    //         //     color: "red"
    //         // });
        
    //         // let mesh = new T.Mesh(geometry, material);
        
    //         // mesh.rotateZ(Math.PI / 4)
        
    //         // mesh.position.set(-2, 0, -2);
        
    //         // transactionsGrid.scene.add(mesh)
    //     }
    // );



}