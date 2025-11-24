import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  spread?: number;
}

export function FloatingParticles({ 
  count = 200, 
  color = '#ffd700', 
  size = 0.1,
  speed = 0.3,
  spread = 20
}: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = Math.random() * 0.02 + 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, [count, spread]);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] += particles.velocities[i * 3] * speed;
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1] * speed;
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2] * speed;
      
      if (positions[i * 3 + 1] > spread / 2) {
        positions[i * 3 + 1] = -spread / 2;
      }
      
      if (Math.abs(positions[i * 3]) > spread / 2) {
        positions[i * 3] = (Math.random() - 0.5) * spread;
      }
      
      if (Math.abs(positions[i * 3 + 2]) > spread / 2) {
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function MagicEmbers({ count = 100 }: { count?: number }) {
  return (
    <FloatingParticles 
      count={count}
      color="#ff6b35"
      size={0.15}
      speed={0.4}
      spread={25}
    />
  );
}

export function MagicalSparks({ count = 150 }: { count?: number }) {
  return (
    <FloatingParticles 
      count={count}
      color="#00d4ff"
      size={0.08}
      speed={0.6}
      spread={30}
    />
  );
}
