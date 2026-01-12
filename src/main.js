// import { OrbitControls } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
    this.SetupControls();
    this.SetResize();
    this.AddObject()
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
    this.container.appendChild(this.renderer.domElement)
  }
  SetupControls(){
    this.controls = new OrbitControls(this.camera,this.renderer.domElement)
    this.controls.enableDamping = true 
  }
  SetResize(){
    window.addEventListener('resize',this.resize.bind(this))
  }
  resize(){
     this.height = this.container.offsetHeight;
    this.width = this.container.offsetWidth;
    this.camera.aspect = this.width/this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width,this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio))

  }
  AddObject(){
    this.geomrty = new THREE.BoxGeometry(1,1,1)
    this.material = new THREE.MeshBasicMaterial({color:'red'})
    this.cube = new THREE.Mesh(this.geomrty,this.material)
    this.scene.add(this.cube)
  }
  tick(){
    this.time = this.clock.getElapsedTime();
    this.controls.update();
    if(this.cube){
        this.cube.rotation.x = this.time;
        this.cube.rotation.z=this.time
    }
this.renderer.render(this.scene,this.camera)
    requestAnimationFrame(this.tick.bind(this))
  }
  
}

new Experience({ dom: document.querySelector(".container") });
