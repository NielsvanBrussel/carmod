import React from 'react'

const Exhaust = ({ nodes, materials, activeParts }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Exhaust000.geometry}
          material={materials.grey_metal}
          visible={activeParts.exhaust === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Exhaust001.geometry}
          material={materials.grey_metal}
          visible={activeParts.exhaust === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Exhaust002.geometry}
          material={materials.grey_metal}
          visible={activeParts.exhaust === 2}
      />
    </>
  )
}

export default Exhaust