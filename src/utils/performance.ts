/**
 * Performance monitoring and optimization utilities
 */

// Performance monitoring
export interface PerformanceMetrics {
  fps: number;
  memory: number;
  renderTime: number;
  isLowPerformance: boolean;
}

class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private renderTimes: number[] = [];
  private callbacks: ((metrics: PerformanceMetrics) => void)[] = [];
  private animationId: number | null = null;

  constructor() {
    this.startMonitoring();
  }

  private startMonitoring() {
    const monitor = () => {
      const now = performance.now();
      this.frameCount++;
      
      // Calculate FPS every second
      if (now - this.lastTime >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
        this.frameCount = 0;
        this.lastTime = now;
        
        this.notifyCallbacks();
      }
      
      this.animationId = requestAnimationFrame(monitor);
    };
    
    this.animationId = requestAnimationFrame(monitor);
  }

  private notifyCallbacks() {
    const metrics = this.getMetrics();
    this.callbacks.forEach(callback => callback(metrics));
  }

  public getMetrics(): PerformanceMetrics {
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
    const avgRenderTime = this.renderTimes.length > 0 
      ? this.renderTimes.reduce((a, b) => a + b, 0) / this.renderTimes.length 
      : 0;
    
    return {
      fps: this.fps,
      memory: memory / (1024 * 1024), // Convert to MB
      renderTime: avgRenderTime,
      isLowPerformance: this.fps < 30 || memory > 100 * 1024 * 1024 // 100MB threshold
    };
  }

  public addRenderTime(time: number) {
    this.renderTimes.push(time);
    if (this.renderTimes.length > 60) {
      this.renderTimes.shift(); // Keep only last 60 measurements
    }
  }

  public subscribe(callback: (metrics: PerformanceMetrics) => void) {
    this.callbacks.push(callback);
    return () => {
      const index = this.callbacks.indexOf(callback);
      if (index > -1) {
        this.callbacks.splice(index, 1);
      }
    };
  }

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.callbacks = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Device capability detection
export const getDeviceCapabilities = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) {
    return {
      supportsWebGL: false,
      maxTextureSize: 0,
      maxVertexAttribs: 0,
      isLowEnd: true
    };
  }

  const webglContext = gl as WebGLRenderingContext;
  const maxTextureSize = webglContext.getParameter(webglContext.MAX_TEXTURE_SIZE);
  const maxVertexAttribs = webglContext.getParameter(webglContext.MAX_VERTEX_ATTRIBS);
  
  // Detect low-end devices
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const isLowEnd = (
    maxTextureSize < 4096 ||
    maxVertexAttribs < 16 ||
    navigator.hardwareConcurrency < 4 ||
    (deviceMemory !== undefined && deviceMemory < 4)
  );

  return {
    supportsWebGL: true,
    maxTextureSize,
    maxVertexAttribs,
    isLowEnd
  };
};

// Performance-based configuration
export const getPerformanceConfig = () => {
  const capabilities = getDeviceCapabilities();
  const metrics = performanceMonitor.getMetrics();
  
  if (capabilities.isLowEnd || metrics.isLowPerformance) {
    return {
      particleCount: 200,
      animationQuality: 'low',
      enableShadows: false,
      enablePostProcessing: false,
      renderScale: 0.75
    };
  }
  
  if (metrics.fps < 45) {
    return {
      particleCount: 400,
      animationQuality: 'medium',
      enableShadows: false,
      enablePostProcessing: true,
      renderScale: 0.85
    };
  }
  
  return {
    particleCount: 800,
    animationQuality: 'high',
    enableShadows: true,
    enablePostProcessing: true,
    renderScale: 1.0
  };
};

// Lazy loading utility for heavy components
export function createLazyComponent(
  importFn: () => Promise<{ default: React.ComponentType<Record<string, unknown>> }>,
  fallback?: React.ComponentType
) {
  const LazyComponent = React.lazy(importFn);

  const WrappedComponent = (props: Record<string, unknown>) => {
    const fallbackElement = fallback ? React.createElement(fallback) : React.createElement('div', {}, 'Loading...');
    return React.createElement(
      React.Suspense,
      { fallback: fallbackElement },
      React.createElement(LazyComponent, props)
    );
  };

  WrappedComponent.displayName = 'LazyComponent';
  
  return WrappedComponent;
}

// Intersection Observer for performance-aware rendering
export const useIntersectionObserver = (
  ref: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};

// React import for lazy components
import React from 'react';