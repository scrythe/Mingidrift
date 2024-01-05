import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import Component3D from "./object";

class Game {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

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
    this.setup();
    requestAnimationFrame(() => this.animate());
  }

  private setup() {
    this.camera.position.z = 5;
    const object = new Component3D();
    this.scene.add(object.cube);
    this.camera.position.z = 5;
  }

  private animate() {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }
}

new Game();

export default Game;
