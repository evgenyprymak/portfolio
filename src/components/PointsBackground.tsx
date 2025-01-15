import * as THREE from 'three';
import { useRef, useEffect } from 'react';

function PointsBackground() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!mountRef.current) return;
  
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.setClearColor(0x070707, 1); // Устанавливаем черный фон
      mountRef.current.appendChild(renderer.domElement);
  
      const pointSpacing = 45;
      const pointsCount = Math.floor((width / pointSpacing) * (height / pointSpacing));
      const pointsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsCount * 3);
      const colors = new Float32Array(pointsCount * 4); // Changed to hold RGBA values
      const velocities = new Array(pointsCount).fill(null).map(() => ({ x: 0, y: 0 }));
  
      const initialPositions: Array<{ x: number, y: number, z: number }> = [];
  
      let index = 0;
      for (let y = -height / 2; y < height / 2; y += pointSpacing) {
        for (let x = -width / 2; x < width / 2; x += pointSpacing) {
          positions[index * 3] = x;
          positions[index * 3 + 1] = y;
          positions[index * 3 + 2] = 0;
  
          initialPositions.push({ x, y, z: 0 });
  
          // Set random transparency (alpha) for each point
          const randomAlpha = Math.random() * 0.5 + 0.5; // Random alpha between 0.5 and 1.0
          colors[index * 4] = 0.1;  // Red
          colors[index * 4 + 1] = 0.1;  // Green
          colors[index * 4 + 2] = 0.15;  // Blue
          colors[index * 4 + 3] = randomAlpha;  // Random Alpha
          index++;
        }
      }
  
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 4)); // Now using RGBA
  
      const textureLoader = new THREE.TextureLoader();
      const pointTexture = textureLoader.load('/portfolio/assets/icons/icon_cross.svg');
      const pointsMaterial = new THREE.PointsMaterial({
        size: 10,
        vertexColors: true,
        map: pointTexture,
        transparent: true, // Keep transparency enabled
      });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);
  
      camera.position.z = 400;
  
      const mouse = new THREE.Vector2();
      const prevMouse = new THREE.Vector2();
      let maxDistance = 2.5;
      let lastMoveTime = Date.now();
      const moveThreshold = 150; // Порог для определения, что мышь не двигается
      let isMouseMoving = false;
      let isMagneticFieldActive = false; // Флаг для активации магнитного поля
  
      // Параметры регулировки
      const speed = 0.35; // Скорость возвращения точек
      const decay = 0.98; // Затухание (скорость замедления)
      const bounciness = 0.3; // Упругость
  
      window.addEventListener('mousemove', (event) => {
        const currentTime = Date.now();
  
        mouse.x = (event.clientX - width / 2) / width;
        mouse.y = (height / 2 - event.clientY) / height;
  
        const velocityX = mouse.x - prevMouse.x;
        const velocityY = mouse.y - prevMouse.y;
        const mouseSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
  
        if (mouseSpeed > 0) {
          isMouseMoving = true;
          lastMoveTime = currentTime;
          maxDistance = Math.min(0.9, 0.1 + mouseSpeed * 12);
          isMagneticFieldActive = true; // Включаем магнитное поле
        }
  
        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;
      });
  
      function animate() {
        requestAnimationFrame(animate);
  
        const positions = pointsGeometry.attributes.position.array;
        const colors = pointsGeometry.attributes.color.array;
  
        const currentTime = Date.now();
        if (currentTime - lastMoveTime > moveThreshold) {
          isMouseMoving = false; // Если прошло достаточно времени без движения, мышь считается не двигающейся
        }
  
        // Когда мышь не двигается, магнитное поле выключается
        if (!isMouseMoving) {
          isMagneticFieldActive = false; // Отключаем магнитное поле
        }
  
        // Когда мышь не двигается, точки должны возвращаться на свои начальные позиции
        if (!isMagneticFieldActive) {
          for (let i = 0; i < pointsCount; i++) {
            const velocity = velocities[i];
        
            // Считаем силу возвращения по синусоиде с учетом параметров
            const distanceX = initialPositions[i].x - positions[i * 3];
            const distanceY = initialPositions[i].y - positions[i * 3 + 1];
        
            // Используем синусоиду для расчета силы движения с параметром упругости
            const timeElapsed = (Date.now() - lastMoveTime) / 1000;
            const returnFactor = Math.sin(timeElapsed * Math.PI * speed) * bounciness; // Затухание по синусоиде с упругостью
            
            // Плавно возвращаем точки на их начальные позиции с учетом синусоидального затухания
            const toInitialX = distanceX * returnFactor;
            const toInitialY = distanceY * returnFactor;
        
            velocity.x += toInitialX;
            velocity.y += toInitialY;
        
            // Применяем затухание скорости
            velocity.x *= decay;
            velocity.y *= decay;
        
            // Останавливаем точки, когда скорость достаточно мала
            if (Math.abs(velocity.x) < 0.01) velocity.x = 0;
            if (Math.abs(velocity.y) < 0.01) velocity.y = 0;
          }
        }
  
        for (let i = 0; i < pointsCount; i++) {
          const initialPosition = initialPositions[i];
          const velocity = velocities[i];
  
          if (isMagneticFieldActive) {
            const dx = initialPosition.x / (width / 2) - mouse.x;
            const dy = initialPosition.y / (height / 2) - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
  
            let force = 0;
            if (maxDistance > 0.1) {
              force = Math.max(0, maxDistance - distance) * 200;
            }
  
            if (force > 0) {
              const angle = Math.atan2(dy, dx);
              const randomFactor = (Math.random() - 0.5) * 0.1;
  
              velocity.x += Math.cos(angle) * force * 0.1 + randomFactor;
              velocity.y += Math.sin(angle) * force * 0.1 + randomFactor;
  
              colors[i * 4] = 0.1;  // Red
              colors[i * 4 + 1] = 0.1;  // Green
              colors[i * 4 + 2] = 0.15;  // Blue
              colors[i * 4 + 3] = Math.random() * 0.3 + 0.7;  // Random Alpha
            }
          }
  
          positions[i * 3] += velocity.x;
          positions[i * 3 + 1] += velocity.y;
  
          // Маленький коэффициент для уменьшения силы воздействия
          velocity.x *= 0.56;
          velocity.y *= 0.56;
        }
  
        pointsGeometry.attributes.position.needsUpdate = true;
        pointsGeometry.attributes.color.needsUpdate = true;
        renderer.render(scene, camera);
      }
  
      animate();
  
      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: '0', left: '0', zIndex: '-1' }} />;
}

export default PointsBackground;
