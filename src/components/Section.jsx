import React, { useContext } from 'react'
import SectionItem from './SectionItem'
import { GlobalContext } from '../context/GlobalState'
import  { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import '../Sidebar.css'

const Section = ({id, title, elements}) => {

  const { activeSection, setActiveSection } = useContext(GlobalContext)

  return (
    <>
      { activeSection === id ?
        <div>
          <div className='section__header' onClick={() => setActiveSection('')}>
            <IoIosArrowDropupCircle size={24}/>
            <h3>{title}</h3>
          </div>
          <div className='section__content'>
            {elements.map(item => <SectionItem key={item.id} id={item.id} name={id} title={item.title}/>)}
          </div>
        </div>
      :
        <div>
          <div className='section__header' onClick={() => setActiveSection(id)}>
            <IoIosArrowDropdownCircle size={24}/>
            <h3>{title}</h3>
          </div>
        </div>
      }

    </>
  )
}

export default Section