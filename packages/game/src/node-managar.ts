import { AmbientLight, DirectionalLight, Group, Scene } from "three";
import Node from "./node";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Car from "./car";

class NodeManager {
  private scene: Scene;
  private nodes: Node[];
  private gltfLoader: GLTFLoader;

  constructor(scene: Scene) {
    this.scene = scene;
    this.nodes = [];
    this.gltfLoader = new GLTFLoader();
  }

  Initialize() {
    console.log(this);
    const car = new Car();
    this.Add(car);
    this.LoadNodeModels();
    // this.LoadAsset();
    this.LoadLight();
  }

  private Add(node: Node) {
    this.nodes.push(node);
    this.scene.add(node);
  }

  private LoadNodeModels() {
    this.nodes.forEach((node) => {
      this.gltfLoader.load(node.modelPath, (gltf) =>
        node.Load(gltf.scene.children),
      );
    });
  }

  private LoadAsset() {
    const loader = new GLTFLoader();
    loader.load("/assets/car-basic.glb", (gltf) => {
      console.log(gltf.scene);
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
