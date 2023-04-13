import React from 'react'

const ColorPickerItem = ({metallic, title, hex, color, setColor}) => {

    const metalVariant = `${title}_metal`
    
    const changecolor = () => {
        metallic? setColor(metalVariant) : setColor(title)
    }

    // check if this color is the selected color
    const activeItem = metallic? (color === metalVariant? true : false) : (title === color? true : false)

  return (
    <div style={{ 
        minWidth: activeItem? '2rem' : '1.5rem',
        minHeight: activeItem? '2rem': '1.5rem',
        backgroundColor: hex,
        boxSizing: 'border-box',
        border: 'grey solid 2px',
        opacity: activeItem? 1 : 0.7,
        borderRadius: '0.5rem',
        margin: activeItem ? '0rem' : '0.25rem',
        cursor: 'pointer'
     }} onClick={() => {changecolor()}}></div>
  )
}

export default ColorPickerItem