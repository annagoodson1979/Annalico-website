import * as THREE from "three";

const experience = document.getElementById("experience");
const enterButton = document.getElementById("enter");
const hud = document.getElementById("hud");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070a);
scene.fog = new THREE.FogExp2(0x05070a, 0.025);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1.6, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
experience.appendChild(renderer.domElement);

let hasEntered = true;
let isMouseLooking = false;
let yaw = 0;
let pitch = 0;

function showExperience() {
  hasEntered = true;
  hud.classList.add("is-visible");
}

function enterExperience() {
  showExperience();

  if (document.pointerLockElement !== document.body) {
    document.body.requestPointerLock?.();
  }
}

enterButton.addEventListener("click", (event) => {
  event.preventDefault();
  enterExperience();
});

document.addEventListener("pointerlockchange", () => {
  isMouseLooking = document.pointerLockElement === document.body;
});

document.addEventListener("pointerlockerror", () => {
  document.body.classList.add("pointer-lock-fallback");
});

document.addEventListener("mousemove", (event) => {
  if (!isMouseLooking) {
    return;
  }

  yaw -= event.movementX * 0.002;
  pitch -= event.movementY * 0.002;
  pitch = Math.max(-1.1, Math.min(1.1, pitch));
  camera.rotation.set(pitch, yaw, 0, "YXZ");
});

showExperience();

const ambient = new THREE.AmbientLight(0x2a3b3f, 0.6);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xa7fff0, 1.2);
keyLight.position.set(5, 10, 2);
scene.add(keyLight);

const monolithLight = new THREE.PointLight(0x2fd6b0, 2.5, 22);
monolithLight.position.set(0, 4.2, -10);
scene.add(monolithLight);

const floorGeo = new THREE.PlaneGeometry(200, 200, 80, 80);
const floorMat = new THREE.MeshStandardMaterial({
  color: 0x0b1a1f,
  metalness: 0.4,
  roughness: 0.15,
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const grid = new THREE.GridHelper(200, 80, 0x1dd6b5, 0x12343b);
grid.material.transparent = true;
grid.material.opacity = 0.18;
scene.add(grid);

const monolithGeo = new THREE.BoxGeometry(2, 6, 2);
const monolithMat = new THREE.MeshStandardMaterial({
  color: 0x2fd6b0,
  metalness: 0.2,
  roughness: 0.1,
  emissive: 0x0b3a2f,
  emissiveIntensity: 0.4,
});
const monolith = new THREE.Mesh(monolithGeo, monolithMat);
monolith.position.set(0, 3, -10);
scene.add(monolith);

const ringGeo = new THREE.TorusGeometry(2.6, 0.025, 16, 120);
const ringMat = new THREE.MeshBasicMaterial({
  color: 0xa7fff0,
  transparent: true,
  opacity: 0.45,
});
const ring = new THREE.Mesh(ringGeo, ringMat);
ring.position.set(0, 3, -10);
ring.rotation.x = Math.PI / 2;
scene.add(ring);

const keys = {};
document.addEventListener("keydown", (event) => {
  keys[event.code] = true;
});
document.addEventListener("keyup", (event) => {
  keys[event.code] = false;
});

const clock = new THREE.Clock();
const direction = new THREE.Vector3();
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const speed = 5.4 * delta;

  direction.z = Number(keys.KeyW) - Number(keys.KeyS);
  direction.x = Number(keys.KeyD) - Number(keys.KeyA);
  direction.normalize();

  if (hasEntered) {
    forward.set(0, 0, -1).applyQuaternion(camera.quaternion);
    forward.y = 0;
    forward.normalize();

    right.crossVectors(forward, up).normalize();
    camera.position.addScaledVector(forward, direction.z * speed);
    camera.position.addScaledVector(right, direction.x * speed);
  }

  const elapsed = clock.elapsedTime;
  if (!isMouseLooking && direction.lengthSq() === 0) {
    const drift = Math.sin(elapsed * 0.4) * 0.28;
    camera.position.x = drift;
    camera.lookAt(monolith.position.x, monolith.position.y, monolith.position.z);
    yaw = camera.rotation.y;
    pitch = camera.rotation.x;
  }

  monolith.rotation.y += 0.28 * delta;
  monolith.position.y = 3 + Math.sin(elapsed * 1.2) * 0.08;
  ring.rotation.z -= 0.18 * delta;
  ring.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.035);

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
