import React, { useContext, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { GlobalContext } from '../context/GlobalState'


import Core from './Core'
import Bumpers from './Bumpers'
import Lights from './Lights'
import Windows from './Windows'
import Spoiler from './Spoiler'
import Hood from './Hood'
import Grille from './Grille'
import Exhaust from './Exhaust'

const Model = (props) => {
    const { nodes, materials } = useGLTF('./car_final.glb')
    const { activeParts } = useContext(GlobalContext)

    const { camera }= useThree()
    const { activeSection } = useContext(GlobalContext)
    
  
    useEffect(() => {
      if (
        activeSection === 'exhaust' ||
        activeSection === 'rearLights' ||
        activeSection === 'rearBumper'
      ) {
        camera.position.set(-3, 0, 8);
      } 
      else if (
        activeSection === 'frontLights' ||
        activeSection === 'frontBumper' ||
        activeSection === 'grille'
      ) {
        camera.position.set(2, 0, -9);
      } 
      else if (
        activeSection === 'hood'
      ) {
        camera.position.set(4.5, 3, -7.5);
      } 
      else if (
        activeSection === 'skirts'
      ) {
        camera.position.set(10.7, 0.4, -1);
      } 
      else if (
        activeSection === 'spoiler' ||
        activeSection === 'rearWindow'
      ) {
        camera.position.set(2.5, 2, 8);
      }
    }, [activeSection])
 

    // console.log(nodes)
    // console.log(materials)

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