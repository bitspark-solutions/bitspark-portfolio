'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SparkNetworkProps {
  nodeCount?: number;
  animationQuality?: 'low' | 'medium' | 'high';
  enablePostProcessing?: boolean;
}

const SparkPoints: React.FC<SparkNetworkProps> = ({ 
  nodeCount = 500, 
  animationQuality = 'medium' 
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const positions = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      // Create a sphere distribution
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = 2 * Math.PI * Math.random();
      const radius = 3 + Math.random() * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [nodeCount]);
  
  // Animation loop
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      const speed = animationQuality === 'low' ? 0.1 : animationQuality === 'medium' ? 0.2 : 0.3;
      pointsRef.current.rotation.y = time * speed;
      pointsRef.current.rotation.x = time * speed * 0.5;
    }
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3DA9FC"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export const SparkNetwork: React.FC<SparkNetworkProps> = (props) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SparkPoints {...props} />
    </>
  );
};

export default SparkNetwork;