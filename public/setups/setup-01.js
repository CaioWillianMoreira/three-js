const options = {
  targetSelector: '#scene',
  width: 800, height: 600,
  backgroundcolor: 0x212121
}

const renderer = new THREE.WebGLRenderer()

renderer.setSize(
  options.width, options.height
)

document.querySelector(
  options.targetSelector
).appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(
  options.backgroundcolor
)

const camera = new THREE.PerspectiveCamera(
  50,
  options.width / options.height
)

camera.position.z = 5
