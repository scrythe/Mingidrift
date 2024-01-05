import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

class Component3D {
  private cube_: Mesh<BoxGeometry, MeshBasicMaterial>;

  constructor() {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube_ = new Mesh(geometry, material);
  }

  get cube() {
    return this.cube_;
  }
}

export default Component3D;
