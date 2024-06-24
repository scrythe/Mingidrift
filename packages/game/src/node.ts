import { Group, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

abstract class Node extends Group {
  static model: string;

  Load(objects: Object3D[]) {
    console.log(this);
    this.children = objects;
  }

  abstract Update(): void;

  abstract get modelPath(): string;
  // {
  //   return "/assets/car-basic.glb";
  // }
}

export default Node;
