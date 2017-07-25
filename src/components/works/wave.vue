<template>
    <div id="wave">
    
    </div>
</template>

<script>
import * as three from 'three';
export default {
    data() {
        return {

        }
    },
    mounted() {
        let W = document.getElementById('wave').offsetWidth;
        let H = document.getElementById('wave').offsetHeight;
        var scene = new three.Scene();
        var camera = new three.PerspectiveCamera(75, W / H, 1, 10000);
        //camera.position.z = 5
        camera.position.set(0, 0, 90);
        var renderer = new three.WebGLRenderer({ alpha: true });
        renderer.setSize(W, H);
        document.getElementById('wave').appendChild(renderer.domElement);

        var geometry = new three.BoxGeometry(290, 1, 290, 20, 20, 20);
        var material = new three.MeshBasicMaterial({
            color: 0x8DEEEE
            , wireframe: true
            , shininess: 31
        });
        var cube = new three.Mesh(geometry, material);
        cube.rotation.x = Math.PI * 0.5;
        //cube.rotation.y = Math.PI * 0.3;
        scene.add(cube);

       
        var render=()=>{
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
        var animate=()=> {
            requestAnimationFrame(drawFrame);
            //drawFrame();
        }
        var  drawFrame=(ts)=>{
            var center = new three.Vector3(0, 0, 0); //生成2维X
            window.requestAnimationFrame(drawFrame);
            var vLength = cube.geometry.vertices.length;
            for (let i = 0; i < vLength; i++) {
                var v = cube.geometry.vertices[i]; //每一个点
                var dist = new three.Vector3(v.x, v.y, v.z).sub(center); //生成2维X

                var size = 10.0; //震动幅度
                var magnitude = 8;
                v.y = Math.sin(dist.length() / -size + (ts / 500)) * magnitude;
                //v.x = Math.sin(distZ.length() / -size + (ts / 500)) * magnitude;

            }
            cube.geometry.verticesNeedUpdate = true;
        }
        render();
        animate()

    }
}
</script>

<style>
#wave {
    height: 100vh;
    width: 100vw;
    background: #000;
    overflow: hidden
}
</style>
