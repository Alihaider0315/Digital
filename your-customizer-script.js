const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const ring = new THREE.Mesh(geometry, material);
scene.add(ring);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 2;

const controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', (event) => {
  const color = new THREE.Color(event.target.value);
  ring.material.color = color;
});
