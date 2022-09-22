// 3D FLOPPY FUN
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// ANIM
import { animationScripts, animationPlay } from "./animation";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfff200);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const render = () => renderer.render(scene, camera);

const loader = new GLTFLoader();

const onProgress = (p) => {
  console.log(p);
};

const onError = (err) => {
  console.log(err);
};

let floppy = null;

const onLoad = (gltf) => {
  console.log("model loaded.", gltf.scene);
  floppy = gltf.scene.children[0];
  floppy.position.set(-1000, 0, -5000);
  floppy.rotation.x -= 15;
  floppy.rotation.y -= 45;
  scene.add(floppy);
  animate();
};

loader.load("/assets/floppy.gltf", onLoad, onProgress, onError);

const gridHelper = new THREE.GridHelper(10, 10, 0xaec6cf, 0xaec6cf);
scene.add(gridHelper);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  const scripts = animationScripts(floppy, camera);
  animationPlay(scripts);

  render();
}

window.addEventListener("resize", onWindowResize, false);
window.scrollTo({ top: 0, behavior: "smooth" });


// COPY PASTE
function copyToCb(e) {
  e.preventDefault();
  const el = e.target;
  navigator.clipboard.writeText(el.innerHTML);

  el.classList.add("copy-done");
  setTimeout(
    function () {
      el.classList.remove("copy-done");
    }.bind(el),
    2000
  );
}

// add listeners
var copyEls = document.querySelectorAll(".js-copy");

copyEls.forEach(function (el) {
  el.addEventListener("click", copyToCb);
});
