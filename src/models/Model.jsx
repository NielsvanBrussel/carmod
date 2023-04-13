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
import Roof from './Roof'

const Model = (props) => {

    const { nodes, materials } = useGLTF('./car.glb')
    const { activeParts, activeSection, primaryColor, secondaryColor } = useContext(GlobalContext)
    const { camera }= useThree()    

    // useFrame((state) =>
    // {
    //     console.log(state.camera.position)
    // })

  
    // change POV depending on active section

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
        activeSection === 'hood' ||
        activeSection === 'frontWindow'
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
        activeSection === 'rearWindow' ||
        activeSection === 'roof'
      ) {
        camera.position.set(2.5, 2, 8);
      } else {
        camera.position.set(12, 4, -7);
      }
    }, [activeSection])
 

    return (
      <group {...props} >

        { /* static part of the car (frame/chassis/windows/wheels) */}
        <Core nodes={nodes} materials={materials} primaryColor={primaryColor} secondaryColor={secondaryColor}/>

        { /* front bumpers, rear bumpers & skirts */}
        <Bumpers nodes={nodes} materials={materials} activeParts={activeParts} secondaryColor={secondaryColor}/>

        {/* lights */}
        <Lights nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* windows */}
        <Windows nodes={nodes} materials={materials} activeParts={activeParts} primaryColor={primaryColor}/>

        {/* spoilers */}
        <Spoiler nodes={nodes} materials={materials} activeParts={activeParts} primaryColor={primaryColor}/>

        {/* hood */}
        <Hood nodes={nodes} materials={materials} activeParts={activeParts} primaryColor={primaryColor}/>

        {/* grille */}
        <Grille nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* exhaust */}
        <Exhaust nodes={nodes} materials={materials} activeParts={activeParts}/>

        {/* roof */}
        <Roof nodes={nodes} materials={materials} activeParts={activeParts}/>

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rims.geometry}
            material={materials.grey_metal}
        />
        
      </group>
    )
}

export default Model