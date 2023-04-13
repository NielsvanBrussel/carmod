import React from 'react'

const Hood = ({ nodes, materials, activeParts, primaryColor }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hood000.geometry}
          material={materials[primaryColor]}
          visible={activeParts.hood === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hood001.geometry}
          material={materials[primaryColor]}
          visible={activeParts.hood === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hood002.geometry}
          material={materials[primaryColor]}
          visible={activeParts.hood === 2}
      />
    </>
  )
}

export default Hood