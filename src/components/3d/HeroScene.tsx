"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion, useIsMobile } from "@/lib/hooks";

function NeuralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    // React to mouse
    const { x, y } = state.pointer;
    meshRef.current.rotation.x += y * 0.3;
    meshRef.current.rotation.y += x * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#008B8B"
          emissive="#20B2AA"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 1200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#008B8B"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#008B8B" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0d9488" />
      <NeuralSphere />
      <ParticleField />
    </>
  );
}

export default function HeroScene() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  // Fallback gradient for mobile/reduced motion
  if (reduced) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#f8fafc]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,139,139,0.12),transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {/* Gradient fallback behind canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#f8fafc]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,139,139,0.1),transparent_70%)]" />

      <Suspense fallback={null}>
        <Canvas
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ position: "absolute", inset: 0 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
