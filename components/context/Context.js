import { useState, createContext } from 'react'

export const formData = createContext(null)
const Context = ({ children }) => {
  const [stepOneData, setStepOneData] = useState()
  const [personalInfo, setPersonalInfo] = useState()
  const [optionalPackage, setOptionalPackage] = useState()
  const [t_duration, setT_Duration] = useState()
  const [t_durationPrice, setT_DurationPrice] = useState()
  const isStepOneActive = true
  const [isStepTwoActive, setIsStepTwoActive] = useState(false)
  const [isStepThreeActive, setIsStepThreeActive] = useState(false)

  return (
    <formData.Provider value={{
      stepOneData,
      setStepOneData,
      personalInfo,
      setPersonalInfo,
      optionalPackage,
      setOptionalPackage,
      t_duration,
      setT_Duration,
      t_durationPrice,
      setT_DurationPrice,
      isStepOneActive,
      isStepTwoActive,
      setIsStepTwoActive,
      isStepThreeActive,
      setIsStepThreeActive
      }}>
      {children}
    </formData.Provider>
  )
}

export default Context