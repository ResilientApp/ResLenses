// import * as T from 'three';
import { getColorFromRamp } from './helpers.js';
import { sceneInit } from './sceneInit.js';
import { TransactionsGrid } from './transactionBlock.js';
import { SceneControl } from './control.js';
import { initUI } from './UIInit.js';
import { getData } from './endpoint.js';
// import { Button } from './pageElements.js';
import { test } from './test.js';

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

		fetch("../tooltips.json").then(response => response.text()).then(tooltipData => {
			let tooltips = JSON.parse(tooltipData)
			// console.log(tooltips)
			initUI(transactionsGrid, control, data, tooltips, resDBLink, ethLink);
		})
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