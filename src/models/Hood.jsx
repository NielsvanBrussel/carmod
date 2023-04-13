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
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hood003.geometry}
          material={materials[primaryColor]}
          visible={activeParts.hood === 3}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hood004.geometry}
          material={materials.carbon2}
          visible={activeParts.hood === 3}
      />
    </>
  )
}

export default Hood