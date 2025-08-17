'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface IntegrationRingProps {
  logos?: string[];
  animationQuality?: 'low' | 'medium' | 'high';
  enablePostProcessing?: boolean;
}

const LogoPlane: React.FC<{ 
  position: [number, number, number]; 
  text: string; 
  index: number;
  animationQuality: 'low' | 'medium' | 'high';
}> = ({ position, text, index, animationQuality }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const speed = animationQuality === 'low' ? 0.5 : animationQuality === 'medium' ? 1 : 1.5;
      
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * speed + index) * 0.1;
      
      // Look at center
      meshRef.current.lookAt(0, 0, 0);
    }
  });
  
  return (
    <group ref={meshRef} position={position}>
      <RoundedBox args={[1.2, 0.8, 0.1]} radius={0.1}>
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.9}
          roughness={0.1}
          metalness={0.1}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.15}
        color="#2E2A5E"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        {text}
      </Text>
    </group>
  );
};

const Ring: React.FC<{ animationQuality: 'low' | 'medium' | 'high' }> = ({ animationQuality }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      const time = state.clock.getElapsedTime();
      const speed = animationQuality === 'low' ? 0.1 : animationQuality === 'medium' ? 0.2 : 0.3;
      ringRef.current.rotation.z = time * speed;
    }
  });
  
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3, 0.1, 8, 32]} />
      <meshStandardMaterial 
        color="#3DA9FC" 
        transparent 
        opacity={0.6}
        emissive="#3DA9FC"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const CentralHub: React.FC = () => {
  const hubRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (hubRef.current) {
      const time = state.clock.getElapsedTime();
      hubRef.current.rotation.y = time * 0.5;
    }
  });
  
  return (
    <group>
      <mesh ref={hubRef}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial 
          color="#2CB9B0" 
          emissive="#2CB9B0"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/sora.woff"
      >
        BitSpark
      </Text>
    </group>
  );
};

export const IntegrationRing: React.FC<IntegrationRingProps> = ({ 
  logos = ['Adyen', 'Stripe', 'Unit.co', 'SSLCommerz'],
  animationQuality = 'medium'
}) => {
  const logoPositions = useMemo(() => {
    return logos.map((_, index) => {
      const angle = (index / logos.length) * Math.PI * 2;
      const radius = 3;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.3, // Flatten the ring slightly
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [logos]);
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2CB9B0" />
      
      <CentralHub />
      <Ring animationQuality={animationQuality} />
      
      {logos.map((logo, index) => (
        <LogoPlane
          key={logo}
          position={logoPositions[index]}
          text={logo}
          index={index}
          animationQuality={animationQuality}
        />
      ))}
    </>
  );
};

export default IntegrationRing;