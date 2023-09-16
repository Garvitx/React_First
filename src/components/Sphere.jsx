import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDSphere = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up the scene when the component unmounts
    return () => {
      scene.remove(sphere);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeDSphere;
