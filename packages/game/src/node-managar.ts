import { Scene } from "three";
import Node from "./node";
import Cube from "./cube";

class NodeManager {
  private scene: Scene;
  private nodes: Node[];

  constructor(scene: Scene) {
    this.scene = scene;
    this.nodes = [];
  }

  Initialize() {
    const cube = new Cube();
    this.Add(cube);
  }

  private Add(node: Node) {
    this.nodes.push(node);
    this.scene.add(node.node);
  }

  Update() {
    this.nodes.forEach((node) => node.Update());
  }
}

export default NodeManager;
