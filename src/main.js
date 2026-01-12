import './style.css'
import * as THREE from 'three'

class Experience{
constructor(options){
this.container = options.dom;
this.height = this.container.offsetHeight;
this.width =this.container.offsetWidth;
console.log(this.width,this.height)
}
}

new Experience({dom:document.querySelector(".container")})