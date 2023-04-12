import React from 'react'

const Windows = ({ nodes, materials, activeParts }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackWindow.geometry}
          material={materials.red}
          visible={activeParts.rearWindow === 1}
      />
    </>
  )
}

export default Windows