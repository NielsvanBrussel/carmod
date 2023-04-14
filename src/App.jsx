import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, CameraControls } from '@react-three/drei'
import Model from './Models/Model'
import Loading from './components/Loading'
import SideBar from './components/SideBar'
import ColorPicker from './components/ColorPicker'
import { IoCloseSharp } from 'react-icons/io5'
import { RiPaintBrushFill } from 'react-icons/ri'


function App() {

  const [colorPicker, setColorPicker] = useState(false)

  return (
    <>
      <div className='header' >
          <h1 style={{ fontSize: '5rem'}}>Loco Low Co.</h1> 
      </div>
      <div className='flexbox' style={{ display: 'flex', flexDirection: 'row'}}>
        <div className='sidebar'>
          <SideBar />
        </div>
        {colorPicker ? 
        <div className='colorpicker__container__outer'>
          <div className='colorpicker__container__inner'>
            <div className='colorpicker__closebutton' onClick={() => setColorPicker(false)}>
              <IoCloseSharp size={32} />
            </div>
            <ColorPicker />
          </div>
        </div>
        :
          <div className='colorpicker__openbutton' onClick={() => setColorPicker(true)}>
            <RiPaintBrushFill size={32} />
          </div>
        }

        <div  className='canvas' style={{  alignItems: 'center', width: '100%', margin: '0 auto', height: '100vh'}}>
          <Canvas
              shadows
              camera={ {
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [ 12, 4, -7 ]
              } }
          >
              
              <directionalLight position={[40, 10, 20]} intensity={1}/>
              <directionalLight position={[0, 50, -10]} intensity={0.6}/>
              <directionalLight position={[-30, 5, 0]} intensity={0.3}/>
              <ambientLight intensity={1} />
              <Sky sunPosition={[30, 0, 20]} />

              <OrbitControls />
              <Suspense fallback={ <Loading /> }> 
                <Model />
              </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default App
