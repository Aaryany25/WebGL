import "./style.css";
import * as THREE from "three";

class Experience {
  constructor(options) {
    this.clock = new THREE.Clock;
    this.container = options.dom;
    this.height = this.container.offsetHeight;
    this.width = this.container.offsetWidth;
    this.SetupScene();
    this.SetupCamera();
    this.SetupRenderer();
    this.tick()
  }

  SetupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#010101");
  }
  SetupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );
    this.camera.position.z =5
  }
  SetupRenderer(){
    this.renderer = new THREE.WebGLRenderer({
        antialias:true
    })
    this.renderer.setSize(this.width,this.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio))
  }
  tick(){
    this.time = this.clock.getElapsedTime();

    requestAnimationFrame(this.tick.bind(this))
  }
}

new Experience({ dom: document.querySelector(".container") });
