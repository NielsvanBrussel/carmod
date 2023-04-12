import React from 'react'

const Lights = ({ nodes, materials, activeParts }) => {

  return (
    <>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights000.geometry}
            material={materials.metal}
            visible={activeParts.frontLights === 0}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights_bulb000.geometry}
            material={materials.light}
            visible={activeParts.frontLights === 0}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights001.geometry}
            material={materials.metal}
            visible={activeParts.frontLights === 1}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights_bulb001.geometry}
            material={materials.light}
            visible={activeParts.frontLights === 1}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights002.geometry}
            material={materials.metal}
            visible={activeParts.frontLights === 2}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights_bulb002.geometry}
            material={materials.light}
            visible={activeParts.frontLights === 2}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights000.geometry}
            material={materials.metal}
            visible={activeParts.rearLights === 0}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights_bulb000.geometry}
            material={materials.light}
            visible={activeParts.rearLights === 0}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights001.geometry}
            material={materials.metal}
            visible={activeParts.rearLights === 1}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights_bulb001.geometry}
            material={materials.light}
            visible={activeParts.rearLights === 1}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights002.geometry}
            material={materials.metal}
            visible={activeParts.rearLights === 2}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Taillights_bulb002.geometry}
            material={materials.light}
            visible={activeParts.rearLights === 2}
        />
    </>
  )
}

export default Lights