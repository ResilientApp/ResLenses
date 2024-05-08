import * as T from 'three';

const BACKGROUND_COLOR = 0x041a29
const CAMERA_OFFSET = 3;
const CAMERA_HEIGHT = 10;
const LIGHT_HEIGHT = 8;
const LIGHT_DIST = 5;
const LIGHT_STRENGTH = 70;

export function sceneInit() {

    const scene = new T.Scene();
	const camera = new T.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new T.WebGLRenderer();
    const lightGroup = new T.Group();

	camera.position.set(0, CAMERA_HEIGHT, CAMERA_OFFSET);
	camera.lookAt(0, 0, 0);

    scene.background = new T.Color(BACKGROUND_COLOR);

	let ambientLight = new T.AmbientLight(0xffffff, 0.3);
	scene.add(ambientLight);

	let pointLight = new T.PointLight(0xff00ff, LIGHT_STRENGTH);
	pointLight.position.set(-LIGHT_DIST, LIGHT_HEIGHT, -LIGHT_DIST-CAMERA_OFFSET);

    let pointLight2 = new T.PointLight(0xffffff, LIGHT_STRENGTH);
	pointLight2.position.set(LIGHT_DIST, LIGHT_HEIGHT, LIGHT_DIST-CAMERA_OFFSET);

    lightGroup.add(pointLight);
    lightGroup.add(pointLight2);
    scene.add(lightGroup)

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

    addEventListener("resize", (event) => {
		renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
	});

    return {
        scene: scene,
        camera: camera,
        renderer: renderer,
        lights: lightGroup
    };
}