import { AmbientLight, DirectionalLight, Scene } from "three";
import Node from "./node";
import Cube from "./cube";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class NodeManager {
  private scene: Scene;
  private nodes: Node[];

  constructor(scene: Scene) {
    this.scene = scene;
    this.nodes = [];
  }

  Initialize() {
    const cube = new Cube();
    // this.Add(cube);
    this.LoadAsset();
    this.LoadLight();
  }

  private Add(node: Node) {
    this.nodes.push(node);
    this.scene.add(node.node);
  }

  private LoadAsset() {
    const loader = new GLTFLoader();
    loader.load("/assets/car-basic.glb", (gltf) => {
      this.scene.add(gltf.scene);
    });
  }

  private LoadLight() {
    const ambLight = new AmbientLight(0xffffff, 4.0);
    this.scene.add(ambLight);
  }

  Update() {
    this.nodes.forEach((node) => node.Update());
  }
}

export default NodeManager;
