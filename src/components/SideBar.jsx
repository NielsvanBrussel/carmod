import React from 'react'
import Section from './Section'

const car = {
    colors: [
        {
            title: 'red',
            hex: ''
        }
    ],
    parts: [
        {
            title: 'Exhaust',
            name: 'exhaust',
            elements: [
                {id: 0, title: 'default'},
                {id: 1, title: 'upswept'},
                {id: 2, title: 'oval'}
            ]
        },
        {
            title: 'Spoiler',
            name: 'spoiler',
            elements: [
                {id: 0, title: 'default'},
                {id: 1, title: 'default2'},
                {id: 2, title: 'default3'},
                {id: 3, title: 'none'}
            ]
        },
        {
            title: 'Front Bumper',
            name: 'frontBumper',
            elements: [
                {id: 0, title: 'default bumper'},
                {id: 1, title: 'tuner bumper'},
                {id: 2, title: 'none'},
            ]
        },
        {
            title: 'Rear Bumper',
            name: 'rearBumper',
            elements: [
                {id: 0, title: 'default bumper'},
                {id: 1, title: 'tuner bumper'},
                {id: 2, title: 'none'},
            ]
        },
        {
            title: 'Skirts',
            name: 'skirts',
            elements: [
                {id: 0, title: 'default skirts'},
                {id: 1, title: 'tuner skirts'},
                {id: 2, title: 'none'},
            ]
        },
        {
            title: 'Grille',
            name: 'grille',
            elements: [
                {id: 0, title: 'vertical'},
                {id: 1, title: 'horizontal'},
                {id: 2, title: 'teeth'}
            ]
        },
        {
            title: 'Hood',
            name: 'hood',
            elements: [
                {id: 0, title: 'default'},
                {id: 1, title: 'default2'},
                {id: 2, title: 'default3'}
            ]
        },
        {
            title: 'Front Lights',
            name: 'frontLights',
            elements: [
                {id: 0, title: 'tubes'},
                {id: 1, title: 'round'},
                {id: 2, title: 'square'}
            ]
        },
        {
            title: 'Rear Lights',
            name: 'rearLights',
            elements: [
                {id: 0, title: 'line'},
                {id: 1, title: 'tubes'},
                {id: 2, title: 'square'}
            ]
        },
        {
            title: 'Rear Window',
            name: 'rearWindow',
            elements: [
                {id: 0, title: 'none'},
                {id: 1, title: 'closed back window vent'},
            ]
        },
        {
            title: 'Front Window',
            name: 'frontWindow',
            elements: [
                {id: 0, title: 'none'},
                {id: 1, title: 'sunstrip'},
            ]
        },
        {
            title: 'Roof',
            name: 'roof',
            elements: [
                {id: 0, title: 'none'},
                {id: 1, title: 'antenna'},
            ]
        },
    ]
}

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