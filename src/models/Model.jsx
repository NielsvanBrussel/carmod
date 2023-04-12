import React, { useContext } from 'react'
import { useGLTF } from '@react-three/drei'
import { GlobalContext } from '../context/GlobalState'
import Core from './Core'
import Bumpers from './Bumpers'
import Lights from './Lights'
import Random from './Random'
import Windows from './Windows'
import Spoiler from './Spoiler'
import Hood from './Hood'
import Grille from './Grille'
import Exhaust from './Exhaust'

const Model = (props) => {
    const { nodes, materials } = useGLTF('./car_final.glb')
    const { activeParts } = useContext(GlobalContext)

    console.log(nodes)
    console.log(materials)

    return (
      <group {...props} dispose={null}>

        { /* static part of the car (frame/chassis/windows/wheels) */}
        <Core nodes={nodes} materials={materials}/>

        { /* front bumpers, rear bumpers & skirts */}
        <Bumpers nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* lights */}
        <Lights nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* windows */}
        <Windows nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* spoilers */}
        <Spoiler nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* hood */}
        <Hood nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* grille */}
        <Grille nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* exhaust */}
        <Exhaust nodes={nodes} materials={materials} activeParts={activeParts}/>

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rims.geometry}
            material={materials.metal}
        />



      </group>
    )
}

export default Model