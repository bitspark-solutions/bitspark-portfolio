'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

interface SparkCanvasProps {
  nodeCount?: number;
  animationSpeed?: number;
  glowIntensity?: number;
  color?: string;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  connections: number[];
  pulse: number;
  pulseSpeed: number;
}

// Client-side only component to avoid hydration issues
const SparkCanvasClient: React.FC<SparkCanvasProps> = ({
  animationSpeed = 1,
  glowIntensity = 0.8,
  color,
  className,
}: SparkCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  // Enhanced configuration for better performance and accessibility
  const baseNodeCount = isMobile ? 300 : 600;
  const enhancedNodeCount = Math.min(Math.max(baseNodeCount, 500), 800);
  const baseRotationSpeed = prefersReducedMotion ? 0 : 0.0005; // Slower orbit, respect reduced motion
  
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use theme colors if no color is provided
  const primaryColor = color || theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  
  // Parse color to RGB for calculations
  const parseColor = (colorStr: string) => {
    const hex = colorStr.replace('#', '');
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16),
    };
  };
  
  const primaryRGB = useMemo(() => parseColor(primaryColor), [primaryColor]);
  const secondaryRGB = useMemo(() => parseColor(secondaryColor), [secondaryColor]);

  // Initialize nodes with 3D positions
  const initializeNodes = useCallback((canvas: HTMLCanvasElement) => {
    const nodes: Node[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;
    
    for (let i = 0; i < enhancedNodeCount; i++) {
      // Create nodes in a 3D sphere distribution
      const phi = Math.acos(1 - 2 * Math.random()); // Polar angle
      const theta = 2 * Math.PI * Math.random(); // Azimuthal angle
      const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution
      
      const x = centerX + r * Math.sin(phi) * Math.cos(theta);
      const y = centerY + r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      nodes.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }
    
    // Create connections between nearby nodes
    const maxDistance = radius * 0.4;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < maxDistance && nodes[i].connections.length < 4 && nodes[j].connections.length < 4) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }
    
    nodesRef.current = nodes;
  }, [enhancedNodeCount]);

  // Animation loop with 3D rotation and effects
  const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, time: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const effectiveRotationSpeed = (isPaused || isHovered) ? 0 : baseRotationSpeed * animationSpeed;
    
    // Apply 3D rotation
    const rotationY = time * effectiveRotationSpeed;
    const rotationX = time * effectiveRotationSpeed * 0.5;
    
    // Update and draw nodes
    nodesRef.current.forEach((node) => {
      // Update pulse
      node.pulse += node.pulseSpeed * animationSpeed;
      
      // Apply 3D rotation
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      
      // Rotate around Y axis
      const x1 = (node.x - centerX) * cosY - node.z * sinY;
      const z1 = (node.x - centerX) * sinY + node.z * cosY;
      
      // Rotate around X axis
      const y1 = (node.y - centerY) * cosX - z1 * sinX;
      const z2 = (node.y - centerY) * sinX + z1 * cosX;
      
      // Project to 2D with perspective
      const perspective = 800;
      const scale = perspective / (perspective + z2);
      const projectedX = centerX + x1 * scale;
      const projectedY = centerY + y1 * scale;
      
      // Update node position for connections
      node.x = centerX + x1;
      node.y = centerY + y1;
      node.z = z2;
      
      // Draw connections first (behind nodes)
      node.connections.forEach(connectionIndex => {
        const connectedNode = nodesRef.current[connectionIndex];
        if (connectedNode) {
          const gradient = ctx.createLinearGradient(
            projectedX, projectedY,
            centerX + ((connectedNode.x - centerX) * perspective / (perspective + connectedNode.z)),
            centerY + ((connectedNode.y - centerY) * perspective / (perspective + connectedNode.z))
          );
          
          const alpha = Math.max(0.1, scale * 0.6) * glowIntensity;
          gradient.addColorStop(0, `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${alpha})`);
          gradient.addColorStop(1, `rgba(${secondaryRGB.r}, ${secondaryRGB.g}, ${secondaryRGB.b}, ${alpha * 0.5})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = scale * 1.5;
          ctx.shadowBlur = 10 * glowIntensity;
          ctx.shadowColor = primaryColor;
          
          ctx.beginPath();
          ctx.moveTo(projectedX, projectedY);
          ctx.lineTo(
            centerX + ((connectedNode.x - centerX) * perspective / (perspective + connectedNode.z)),
            centerY + ((connectedNode.y - centerY) * perspective / (perspective + connectedNode.z))
          );
          ctx.stroke();
        }
      });
      
      // Draw node
      const pulseIntensity = (Math.sin(node.pulse) + 1) * 0.5;
      const nodeSize = (2 + pulseIntensity * 2) * scale;
      const alpha = Math.max(0.3, scale) * glowIntensity;
      
      // Create radial gradient for node
      const gradient = ctx.createRadialGradient(
        projectedX, projectedY, 0,
        projectedX, projectedY, nodeSize * 2
      );
      gradient.addColorStop(0, `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, ${alpha})`);
      gradient.addColorStop(0.7, `rgba(${secondaryRGB.r}, ${secondaryRGB.g}, ${secondaryRGB.b}, ${alpha * 0.7})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 15 * glowIntensity * pulseIntensity;
      ctx.shadowColor = primaryColor;
      
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, nodeSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Add inner bright core
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, nodeSize * 0.3, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.shadowBlur = 0;
    animationRef.current = requestAnimationFrame((nextTime) => animate(canvas, ctx, nextTime));
  }, [animationSpeed, glowIntensity, primaryRGB, secondaryRGB, isPaused, isHovered, baseRotationSpeed, primaryColor]);

  // Setup canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      initializeNodes(canvas);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start animation
    animationRef.current = requestAnimationFrame((time) => animate(canvas, ctx, time));
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enhancedNodeCount, animationSpeed, glowIntensity, primaryColor, secondaryColor, isPaused, isHovered, animate, initializeNodes]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPaused(!isPaused)}
    />
  );
};

// Main component with SSR handling
export default function SparkCanvas(props: SparkCanvasProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className={props.className}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    );
  }

  return <SparkCanvasClient {...props} />;
}