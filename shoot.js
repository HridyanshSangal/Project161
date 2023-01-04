AFRAME.registerComponent('bowling-balls',{
    init: function(){
        this.showBullet()
    },
    showBullet: function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 't'){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('gltf-model', './bowling_ball/scene.gltf')
                bullet.setAttribute('scale',{x:3,y:3,z:3})
                var cam = document.querySelector('#camera')
                pos = cam.getAttribute('position')
                bullet.setAttribute('position',{
                    x:pos.x, y: -1.2, z: pos.z
                })
                var camera = document.querySelector('#camera').object3D
                //get the camera direction as three.js vector
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
            bullet.setAttribute('velocity', direction.multiplyScalar(-10))
            var scene = document.querySelector('#scene')
            scene.appendChild(bullet)
            }
        })
    }
})