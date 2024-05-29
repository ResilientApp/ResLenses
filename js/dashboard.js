// import * as T from 'three';
import { getColorFromRamp } from './helpers.js';
import { sceneInit } from './sceneInit.js';
import { TransactionsGrid } from './transactionBlock.js';
import { SceneControl } from './control.js';
import { initUI } from './UIInit.js';
import { getData } from './endpoint.js';
// import { Button } from './pageElements.js';
import { test } from './test.js';

const tooltips = {
    placeholder: "Placeholder text",
    resetPosition: "Return to Origin: Reset the position of the camera to the top left corner",
    dataSelect: "Data: Select the source of the data you wish to view.",
    sortSelect: "Sort: Select how the addresses is sorted from top/left to bottom/right.",
    viewSelect: "View: Select which format you wish to view the data in.",
    scaleSelect: "Scale: Select the relative scaling of the data.",
    symmetrySelect: "Symmetry: Select whether or not the transactions are symmetrical",

    resDBData: "ResDB: This is live data from the Resilient DB network. This data is updated once every hour.",
    ethData: "Ethereum: This is data procurred from the Ethereum Mainnet network. This data is the cummulation of random sampling of 1000 transactions every 30 minutes for the last 24 hours. Takes a few seconds to load.",

    TransactionTotal: "Transactions Total: Sorts addresses based on the total summation of all UTXO they've sent out",
    numTransactions: "Number of Transactions: Sorts addresses based on the number of transactions they've sent out",
    largestTransaction: "Largest Transaction: Sorts the activity between all pairs of users first based on UTXO totals, then sorts addresses based high activity pairs. Recommended for highly sparse data such as Ethereum. Bars will likely form in a diagonal",

    grid: "Grid: Display a 2D grid representing pairwise activity between address A and address B",
    bar: "Bar: Display a bar graph representing the total activity of each address",

    linear: "Linear: Bars are linearly scaled.",
    log: "Log: Bars are logarithmically scaled.",

    symmetric: "True: Transactions sent to and from an address are both accounted for and summed up regarding activity per From/To pair of addresses.",
    asymmetric: "False: Only transactions sent to the recieving address is accounted for activity per From/To pair of addresses."
}

export function startScene() {

	// scene init
	let sceneData = sceneInit();
	const scene = sceneData.scene;
	const camera = sceneData.camera;
	const renderer = sceneData.renderer;
	const lights = sceneData.lights;

	// transaction data init
	const transactionsGrid = new TransactionsGrid(scene, camera);
	const control = new SceneControl(scene, camera, transactionsGrid);
	// transactionGrid.control = control

	// default file
	// let file = "https://raw.githubusercontent.com/gjnguyen18/utxo-lenses/master/transformed_data2.json"
	// let resDBLink = "http://localhost:3080/getData_RESDB"
	// let ethLink = "http://localhost:3080/getData_ETH"

	let resDBLink = "https://res-lenses-backend.resilientdb.com/getData_RESDB"
	let ethLink = "https://res-lenses-backend.resilientdb.com/getData_ETH"

	// console.log(encodeURIComponent("http://127.0.0.1:5501/api/v1/?startTime=2022-11-01T00:00:00Z&endTime=2023-11-30T23:59:59Z"))

	// if query contains link, use that instead
	// let urlSearchParams = new URLSearchParams(window.location.search);
	// let params = Object.fromEntries(urlSearchParams.entries());
	// let link = params.link;
	// if (link) {
	// 	resDBLink = link;
	// } 

	getData(resDBLink, (data) => {
		transactionsGrid.loadData(data);
		control.isDataLoaded = true;

		// fetch("../tooltips.json").then(response => response.text()).then(tooltipData => {
		// 	let tooltips = JSON.parse(tooltipData)
		// 	// console.log(tooltips)
		// 	initUI(transactionsGrid, control, data, tooltips, resDBLink, ethLink);
		// })

		initUI(transactionsGrid, control, data, tooltips, resDBLink, ethLink);
	})

	// mouse events
	function onMouseMove(event) {
		control.onMouseMove(event);
	}
	function onMouseDown(event) {
		control.onMouseDown(event);
	}
	function onMouseUp(event) {
		control.onMouseUp(event);
	}
	function onWheelEvent(event) {
		control.onWheelEvent(event);
	}
	function onMouseDblClick(event) {
		control.onMouseDblClick(event);
	}
	function onMouseClick(event) {
		control.onMouseClick(event);
	}

	window.addEventListener('mousemove', onMouseMove, false);
	document.body.addEventListener('mousedown', onMouseDown, true);
	document.body.addEventListener('mouseup', onMouseUp, true);
	document.body.addEventListener('wheel', onWheelEvent, true);
	document.body.addEventListener('dblclick', onMouseDblClick, true);
	document.body.addEventListener('click', onMouseClick, true);

	// let g = new T.BoxGeometry()
	// let t = new T.Material()
	// // console.log(g)
	// let sphere = new T.Mesh(g, t)
	// scene.add(sphere)

	function animate() {
		requestAnimationFrame(animate);
		control.update();
		transactionsGrid.update();
		lights.position.x = camera.position.x;
		lights.position.z = camera.position.z;
		renderer.render(scene, camera);
	}

	// test
	test()

	animate();
}