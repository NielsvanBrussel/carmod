import React, { createContext, useEffect, useState } from "react"

// init and create global context

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {


    const [activeSection, setActiveSection] = useState('')

    const [activeParts, setActiveParts] = useState({
        grille: 0,
        exhaust: 0,
        hood: 0,
        spoiler: 0,
        skirts: 0,
        frontBumper: 0,
        rearBumper: 0,
        frontLights: 0,
        rearLights: 0,
        frontWindow: 0,
        rearWindow: 0,
        roof: 0,
    })

    // useEffect(() => {
    //   console.log(activeParts)
    // }, [activeParts])

    // useEffect(() => {
    //   console.log(activeSection)
    // }, [activeSection])
    
    const [activePrimaryColor, setActivePrimaryColor] = useState('red')
    const [activeSecondaryColor, setActiveSecondaryColor] = useState('black')


    const changePart = ({name, id}) => {
        console.log('allo')
        setActiveParts(prevState => {
            return({
              ...prevState,
              [name]: id
            });
          });
    }

    return  <GlobalContext.Provider 
                value={{
                    activeParts: activeParts,
                    activeSection: activeSection,
                    changePart,
                    setActiveSection,
                }}>

                    {children} 

            </GlobalContext.Provider>

}