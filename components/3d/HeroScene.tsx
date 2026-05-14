"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function GoldRing({
  radius = 1.6,
  tube = 0.06,
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  speed = 0.15,
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * speed * 0.4;
    ref.current.rotation.y += dt * speed;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;
  });
  return (
    <Float floatIntensity={0.6} rotationIntensity={0.2} speed={1}>
      <mesh ref={ref} position={position} rotation={rotation} castShadow>
        <torusGeometry args={[radius, tube, 64, 200]} />
        <meshStandardMaterial
          color="#C9A96A"
          metalness={1}
          roughness={0.18}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  );
}

function GlassRing({
  radius = 1.9,
  tube = 0.05,
  position = [0, 0, 0] as [number, number, number],
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x -= dt * 0.1;
    ref.current.rotation.z += dt * 0.05;
  });
  return (
    <Float floatIntensity={0.4} rotationIntensity={0.15} speed={0.8}>
      <mesh ref={ref} position={position} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[radius, tube, 64, 200]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.04}
          anisotropy={0.3}
          roughness={0.05}
          backside
          color="#E9D7B2"
        />
      </mesh>
    </Float>
  );
}

function Petals({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 - 1
      ),
      rot: new THREE.Vector3(Math.random() * 2, Math.random() * 2, Math.random() * 2),
      speed: 0.05 + Math.random() * 0.12,
      drift: 0.1 + Math.random() * 0.3,
      scale: 0.04 + Math.random() * 0.05,
    }));
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((p, i) => {
      const y = ((p.pos.y - t * p.speed) % 8) - 4;
      const x = p.pos.x + Math.sin(t * p.drift + i) * 0.3;
      dummy.position.set(x, y, p.pos.z);
      dummy.rotation.set(p.rot.x + t * 0.4, p.rot.y + t * 0.3, p.rot.z + t * 0.2);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 6]} />
      <meshStandardMaterial
        color="#E8C9C2"
        roughness={0.6}
        metalness={0.1}
        emissive="#C9A96A"
        emissiveIntensity={0.05}
      />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0B0B0D"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E9D7B2" />
      <directionalLight position={[-5, -2, -3]} intensity={0.4} color="#E8C9C2" />

      <GoldRing radius={1.65} tube={0.06} position={[0.1, 0, 0]} />
      <GoldRing
        radius={1.4}
        tube={0.04}
        position={[-0.2, 0.15, 0.3]}
        rotation={[Math.PI / 2.5, 0.3, 0]}
        speed={-0.2}
      />
      <GlassRing radius={2.1} tube={0.05} position={[0.05, 0, -0.4]} />

      <Petals count={60} />

      <Environment preset="studio" environmentIntensity={0.6} />

      <EffectComposer multisampling={0}>
        <Bloom intensity={0.6} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.2} darkness={0.7} />
      </EffectComposer>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.5], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
