'use client';
import { useEffect, useRef } from 'react';

export default function ThreeHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let animId;

    async function init() {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas || !mounted) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Particle System
      const particlesCount = 1500;
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particlesCount * 3);
      const scales = new Float32Array(particlesCount);

      for (let i = 0; i < particlesCount; i++) {
        const radius = 3 + Math.random() * 5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        scales[i] = Math.random();
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Wireframe Icosahedron
      const icoGeometry = new THREE.IcosahedronGeometry(1.8, 1);
      const icoMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, wireframe: true, transparent: true, opacity: 0.12,
      });
      const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
      scene.add(icosahedron);

      // Torus 1
      const torusGeometry = new THREE.TorusGeometry(2.8, 0.01, 16, 100);
      const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.08,
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.rotation.x = Math.PI / 3;
      scene.add(torus);

      // Torus 2
      const torus2 = new THREE.Mesh(
        new THREE.TorusGeometry(3.5, 0.01, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05 })
      );
      torus2.rotation.x = -Math.PI / 4;
      torus2.rotation.y = Math.PI / 6;
      scene.add(torus2);

      camera.position.z = 5;

      // Mouse interaction
      let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      document.addEventListener('mousemove', onMouseMove);

      // Scroll parallax
      let scrollY = 0;
      const onScroll = () => { scrollY = window.scrollY; };
      window.addEventListener('scroll', onScroll);

      // Animation loop
      const clock = new THREE.Clock();
      function animate() {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        icosahedron.rotation.x = t * 0.1 + targetY * 0.3;
        icosahedron.rotation.y = t * 0.15 + targetX * 0.3;

        torus.rotation.z = t * 0.05;
        torus2.rotation.z = -t * 0.03;

        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;

        const scrollOffset = scrollY * 0.002;
        scene.position.y = -scrollOffset;
        scene.rotation.x = scrollOffset * 0.1;

        camera.position.x += (targetX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (targetY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }
      animate();

      // Resize
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
      window.addEventListener('resize', onResize);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    }

    const cleanup = init();
    return () => {
      mounted = false;
      cancelAnimationFrame(animId);
      cleanup.then?.(fn => fn?.());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-three-canvas"
      style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%' }}
    />
  );
}
