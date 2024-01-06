import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import Node from "./node";

class Cube implements Node {
  private node_: Mesh<BoxGeometry, MeshBasicMaterial>;

  constructor() {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.node_ = new Mesh(geometry, material);
  }

  Update() {}

  get node() {
    return this.node_;
  }
}

export default Cube;
