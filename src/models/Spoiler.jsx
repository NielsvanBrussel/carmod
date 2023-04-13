import React from 'react'

const Spoiler = ({ nodes, materials, activeParts, primaryColor }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spoiler000.geometry}
          material={materials[primaryColor]}
          visible={activeParts.spoiler === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spoiler001.geometry}
          material={materials.carbon2}
          visible={activeParts.spoiler === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spoiler002.geometry}
          material={materials[primaryColor]}
          visible={activeParts.spoiler === 2}
      />
    </>
  )
}

export default Spoiler