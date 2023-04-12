import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, CameraControls } from '@react-three/drei'
import Model from './Models/Model'
import Loading from './components/Loading'
import SideBar from './components/SideBar'


function App() {

  return (
    <>
      <div className='header' >
          <h1 style={{ fontSize: '5rem'}}>Loco Low Co.</h1> 
      </div>
      <div className='flexbox' style={{ display: 'flex', flexDirection: 'row'}}>
        <div className='sidebar'>
          <SideBar />
        </div>
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
              
              <directionalLight intensity={1}/>
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
