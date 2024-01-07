import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import NodeManager from "./node-managar";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Game {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private nodeManager: NodeManager;
  private controls: OrbitControls;

  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(this.renderer.domElement);
    this.nodeManager = new NodeManager(this.scene);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.Initialize();
    requestAnimationFrame(() => this.Update());
  }

  private Initialize() {
    this.nodeManager.Initialize();
    this.camera.position.x = 10;
    this.camera.position.y = 5;
    this.camera.position.z = 5;
    this.controls.update();
    // this.renderer.setPixelRatio(0.25);
  }

  private Update() {
    this.nodeManager.Update();
    this.controls.update();
    this.Render();
    requestAnimationFrame(() => this.Update());
  }

  private Render() {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

new Game();

export default Game;
