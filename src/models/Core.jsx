import React from 'react'

const Core = ({ nodes, materials }) => {

  return (
    <>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Car_core_lower.geometry}
            material={materials['Material.001']}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Car_core_bottom.geometry}
            material={materials.black}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Car_core_upper.geometry}
            material={materials.red}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Car_core_windows.geometry}
            material={materials.black}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheels.geometry}
            material={materials.black}
        />
    </>
  )
}

export default Core