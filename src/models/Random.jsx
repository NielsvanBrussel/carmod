import React from 'react'

const Random = ({ nodes, materials, activeParts }) => {
  return (
    <>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rims.geometry}
            material={materials.metal}
        />
    </>
  )
}

export default Random