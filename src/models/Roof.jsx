import React from 'react'

const Roof = ({ nodes, materials, activeParts }) => {
  return (
    <>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Antenna.geometry}
          material={materials.black}
          visible={activeParts.roof === 1}
      />
    </>
  )
}

export default Roof