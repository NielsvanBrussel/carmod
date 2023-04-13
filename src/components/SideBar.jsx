import React from 'react'
import Section from './Section'
import { car } from '../data'

const SideBar = () => {

  return (
    <div style={{ padding: '2rem 1rem' }}>
        {car.parts.map(
            item => <Section key={item.name} id={item.name} title={item.title} elements={item.elements} />
        )}
    </div>
  )
}

export default SideBar