import Node from "./node";

class Car extends Node {
  model = "hallo:";

  Update() {}

  get modelPath() {
    return "/assets/car-basic.glb";
  }
}

export default Car;
