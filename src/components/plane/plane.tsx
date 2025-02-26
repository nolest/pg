// 基础导入
import React from 'react';
import * as THREE from 'three';
import cubeVshader from '../../shaders/cube/cube.vert';
import cubeFshader from '../../shaders/cube/cube.frag';
// 类型定义
interface PlaneProps {
  // 组件props定义
}

// 组件主体
const Plane: React.FC<PlaneProps> = () => {
  // 组件逻辑
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0.1, 10 );
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  const clock = new THREE.Clock();
  
  const geometry = new THREE.PlaneGeometry( 2, 2 );
  const uniforms = {
    u_color: { value: new THREE.Color(0xff0000) },
    u_time: { value: 0.0 },
    u_mouse: { value:{ x:0.0, y:0.0 }},
    u_resolution: { value:{ x:0, y:0 }}
  }
  
  const material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: cubeVshader,
    fragmentShader: cubeFshader
  } );
  
  const plane = new THREE.Mesh( geometry, material );
  scene.add( plane );
  
  camera.position.z = 1;
  
  onWindowResize();
  if ('ontouchstart' in window){
    document.addEventListener('touchmove', move);
  }else{
    window.addEventListener( 'resize', onWindowResize, false );
    document.addEventListener('mousemove', move);
  }
  
  function move(evt: TouchEvent | MouseEvent){
    uniforms.u_mouse.value.x = (evt as TouchEvent).touches ? (evt as TouchEvent).touches[0].clientX : (evt as MouseEvent).clientX;
    uniforms.u_mouse.value.y = (evt as TouchEvent).touches ? (evt as TouchEvent).touches[0].clientY : (evt as MouseEvent).clientY;
  }
  
  animate();
  
  function onWindowResize() {
    const aspectRatio = window.innerWidth/window.innerHeight;
    let width, height;
    if (aspectRatio>=1){
      width = 1;
      height = (window.innerHeight/window.innerWidth) * width;
    }else{
      width = aspectRatio;
      height = 1;
    }
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
  }
  
  function animate() {
    requestAnimationFrame( animate );
    uniforms.u_time.value += clock.getDelta();
    renderer.render( scene, camera );
  }

  return (
    // 基础容器
    <div className="plane-container" id="plane-container">
    </div>
  );
};

// 模块导出
export default Plane;
