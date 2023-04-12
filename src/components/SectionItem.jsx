import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im'
import '../Sidebar.css'

const SectionItem = ({id, name, title}) => {

    const { changePart, activeParts } = useContext(GlobalContext)

    return (
        <div>
            {activeParts[name] === id ?
                <div className='section__item checked'>
                    <ImCheckboxChecked />
                    <p>{title}</p>
                </div>
            :
                <div className='section__item unchecked' onClick={() => changePart({name: name, id: id})}>
                    <ImCheckboxUnchecked />
                    <p>{title}</p>
                </div>
            }
        </div>
    )
}

export default SectionItem