import { useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'
import React from 'react'

const Plane = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(planeScene)
  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane