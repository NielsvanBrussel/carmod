import React from 'react'

const Bumpers = ({ nodes, materials, activeParts }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackBumper000.geometry}
          material={materials.carbon2}
          visible={activeParts.rearBumper === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackBumper001.geometry}
          material={materials.carbon2}
          visible={activeParts.rearBumper === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontBumper000.geometry}
          material={materials.carbon2}
          visible={activeParts.frontBumper === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontBumper001.geometry}
          material={materials.carbon2}
          visible={activeParts.frontBumper === 1}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Skirts000.geometry}
          material={materials.carbon2}
          visible={activeParts.skirts === 0}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Skirts001.geometry}
          material={materials.carbon2}
          visible={activeParts.skirts === 1}
      />
    </>
  )
}

export default Bumpers