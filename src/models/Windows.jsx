import React from 'react'

const Windows = ({ nodes, materials, activeParts, primaryColor }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackWindow.geometry}
          material={materials[primaryColor]}
          visible={activeParts.rearWindow === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sunstrip.geometry}
          material={materials.black}
          visible={activeParts.frontWindow === 1}
      />
    </>
  )
}

export default Windows