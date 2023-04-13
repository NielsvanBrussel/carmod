import React, { createContext, useEffect, useState } from "react"

// init and create global context

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [activeSection, setActiveSection] = useState('')
    const [PrimaryColor, setPrimaryColor] = useState('red')
    const [SecondaryColor, setSecondaryColor] = useState('red')
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

   
    const changePart = ({name, id}) => {
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
                    primaryColor: PrimaryColor,
                    secondaryColor: SecondaryColor,
                    setPrimaryColor,
                    setSecondaryColor,
                    changePart,
                    setActiveSection,
                }}>

                    {children} 

            </GlobalContext.Provider>

}