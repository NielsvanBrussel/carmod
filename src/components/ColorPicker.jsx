import React, { useContext } from 'react'
import { car } from '../data'
import ColorPickerItem from './ColorPickerItem'
import { GlobalContext } from '../context/GlobalState'
import '../Sidebar.css'


const ColorPicker = () => {

    const {setPrimaryColor, setSecondaryColor, primaryColor, secondaryColor} = useContext(GlobalContext)

  return (
    <div className='colorpicker_flexbox'>
       <div className='colorpicker'>
        <h3 className='colorpicker__h3'>Primary color</h3>
        <div className='colorpicker_flexbox'>
            <div>
                <h4 className='colorpicker__h4'>regular</h4>
                <div className='colorpicker__item'>
                    {car.colors.map(color => 
                        <ColorPickerItem 
                            metallic={false} 
                            key={color.title} 
                            title={color.title} 
                            hex={color.hex} 
                            setColor={setPrimaryColor} 
                            color={primaryColor}
                        />
                    )}                
                </div>                
            </div>
            <div>
                <h4 className='colorpicker__h4'>metallic</h4>
                <div className='colorpicker__item'>
                    {car.colors.map(color => 
                        <ColorPickerItem 
                            metallic={true} 
                            key={color.title} 
                            title={color.title} 
                            hex={color.hex} 
                            setColor={setPrimaryColor} 
                            color={primaryColor}
                        />
                    )}                    
                </div>           
            </div>            
        </div>

       </div>
       <div className='colorpicker'>
        <h3>Secondary color</h3>
        <div className='colorpicker_flexbox'>
            <div>
                <h4>regular</h4>
                <div className='colorpicker__item'>
                    {car.colors.map(color => 
                        <ColorPickerItem 
                            metallic={false} 
                            key={color.title} 
                            title={color.title} 
                            hex={color.hex} 
                            setColor={setSecondaryColor} 
                            color={secondaryColor}
                        />
                    )} 
                </div>
            </div>
            <div>
                <h4>metallic</h4>
                <div className='colorpicker__item'>
                    {car.colors.map(color => 
                        <ColorPickerItem 
                            metallic={true} 
                            key={color.title} 
                            title={color.title} 
                            hex={color.hex} 
                            setColor={setSecondaryColor} 
                            color={secondaryColor}
                        />
                    )}
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ColorPicker