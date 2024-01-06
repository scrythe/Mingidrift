import { Object3D } from "three";

interface Node {
  readonly node: Object3D;
  Update: () => void;
}

export default Node;
