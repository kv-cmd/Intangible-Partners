import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'

function Prism() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#00E0FF" metalness={0.6} roughness={0.1} emissive="#8A2EFF" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  )
}

export default function WebGLHero() {
  return (
    <Canvas className="hero-canvas" camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={1.2} />
      <Suspense fallback={null}>
        <Prism />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  )
}
