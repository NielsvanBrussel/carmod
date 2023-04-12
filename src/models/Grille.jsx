import React from 'react'

const Grille = ({ nodes, materials, activeParts }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grille001.geometry}
          material={materials.carbon}
          visible={activeParts.grille === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grille002.geometry}
          material={materials.carbon}
          visible={activeParts.grille === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grille003.geometry}
          material={materials.carbon}
          visible={activeParts.grille === 2}
      />
    </>
  )
}

export default Grille