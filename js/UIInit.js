import { Button, Checkbox, Slider, TextBox, Element, Container } from "./pageElements"
import { getData } from './endpoint.js';
import * as T from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';



const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const helpText = "This is a 3D heatmap representing transactions between users. T" +
 "he blocks on the grid represent the total sum of transactions between any two users across laid out across the X and Y axis" +
 ". Smaller, bluer cubes indicate less/smaller transactions while larger, redder cubes indicate more/larger transactions" + 
 "<br /> <br /> The viewer may drag click to move the camera around, scroll up and down to zoom in/out" +
 ", and double click on any block to see further details on transactions between two users, normal clicking will deselect the block." + 
 "<br /> <br /> The bottom two sided slider allows the viewer to select a range of time, which will filter only transactions that exist within that time" +
 ". Clicking update will refresh the scene with only those transactions" + 
 "<br /> <br /> Click this tab again to hide the tab."

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

export function initUI(transactionsGrid, control, data) {
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

    let switchDataButton = new Button("SwitchButton", "innerBottom")
    switchDataButton.button.innerHTML = "Switch to ETH";
    switchDataButton.button.addEventListener("click", () => {
        let file;
        let buttonName;
        if(switchDataButton.button.innerHTML == "Switch to RESDB") {
            buttonName = "Switch to ETH";
            file = "http://localhost:8080/getData_RESDB"
        } else if(switchDataButton.button.innerHTML == "Switch to ETH") {
            buttonName = "Switch to RESDB";
            file = "http://localhost:8080/getData_ETH"
        } else {
            return
        }
        switchDataButton.button.innerHTML = "..."
        control.isDataLoaded = false;
        getData(file, (data1) => {
            // transactionsGrid.clearData();
            control.isDataLoaded = true;
            control.loadedChunks = new Map();
            transactionsGrid.loadData(data1);
            switchDataButton.button.innerHTML = buttonName;
        })
    });

    let toggleSortButton = new Button("ToggleSortButton", "innerBottom")
    toggleSortButton.button.innerHTML = "Sort By Num Transactions";
    toggleSortButton.button.addEventListener("click", () => {
        let file;
        if(switchDataButton.button.innerHTML == "Switch to RESDB") {
            file = "http://localhost:8080/getData_ETH"
        } else if(switchDataButton.button.innerHTML == "Switch to ETH") {
            file = "http://localhost:8080/getData_RESDB"
        }
        // control.isDataLoaded = false;

        let buttonName;
        if(toggleSortButton.button.innerHTML == "Sort By Num Transactions") {
            transactionsGrid.toggleSort = 1;
            buttonName = "Sort By Transactions Total";
        } else if(toggleSortButton.button.innerHTML == "Sort By Transactions Total") {
            transactionsGrid.toggleSort = 0;
            buttonName = "Sort By Num Transactions";
        } else {
            return
        }
        toggleSortButton.button.innerHTML = "..."

        // getData(file, (data1) => {
        //     // transactionsGrid.clearData();
        //     control.isDataLoaded = true;
        //     control.loadedChunks = new Map();
        //     transactionsGrid.loadData(data1);
        //     toggleSortButton.button.innerHTML = buttonName;
        // })

        // control.isDataLoaded = true;
        // control.loadedChunks = new Map();
        control.clearChunks();
        transactionsGrid.createTempBlocks();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        toggleSortButton.button.innerHTML = buttonName;
    })

    let toggleViewButton = new Button("ToggleView", "innerBottom")
    toggleViewButton.button.innerHTML = "Bar View";
    toggleViewButton.button.addEventListener("click", () => {
        if(toggleViewButton.button.innerHTML == "Grid View") {
            control.setCamera(0);
            toggleViewButton.button.innerHTML = "Bar View";
        } else if(toggleViewButton.button.innerHTML == "Bar View") {
            transactionsGrid.setVerticalOpacities();
            control.setCamera(1);
            toggleViewButton.button.innerHTML = "Grid View";
        } else {
            return
        }
        // control.isDataLoaded = true;
        // control.loadedChunks = new Map();
        transactionsGrid.loadData(transactionsGrid.dataToLoad);
        // transactionsGrid.clearBlocks();
        control.clearChunks();
    })

    let showHelp = false;
    let helpButton = new TextBox("Help button", "helpDiv", "?");
    helpButton.div.onmousedown = () => {
        if(!showHelp) {
            helpDiv.style.height = "calc(100% - 250px)";
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

    let toggleScaleButton = new Button("ToggleScale", "innerBottom")

    let toggleSymmetryButton = new Button("ToggleSymmetry", "innerBottom")

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