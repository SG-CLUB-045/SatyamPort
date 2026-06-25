"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AmbientScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {
      return;
    }

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const orbGeometry = new THREE.IcosahedronGeometry(1.8, 1);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x0f172a,
      emissiveIntensity: 0.5,
      metalness: 0.35,
      roughness: 0.18,
      transparent: true,
      opacity: 0.34
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(orb);

    const light = new THREE.PointLight(0x06b6d4, 18, 100);
    light.position.set(5, 5, 8);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambient);

    const particleCount = 72;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 16;
      positions[offset + 1] = (Math.random() - 0.5) * 10;
      positions[offset + 2] = (Math.random() - 0.5) * 10;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.055,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const resizeObserver = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    resizeObserver.observe(mount);

    let animationFrame = 0;
    const animate = () => {
      if (document.hidden) {
        animationFrame = window.requestAnimationFrame(animate);
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);
      orb.rotation.x += 0.003;
      orb.rotation.y += 0.006;
      points.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };

    animate();

    const handleVisibility = () => {
      if (document.hidden) {
        return;
      }

      renderer.render(scene, camera);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("visibilitychange", handleVisibility);
      resizeObserver.disconnect();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}