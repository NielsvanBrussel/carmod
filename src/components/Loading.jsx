import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Loading = () => {
    const cubeRef = useRef()

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta * 3
    })

  return (
    <mesh ref={ cubeRef }> 
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={"red"} opacity={0.5} />
    </mesh>
  )
}

export default Loading