import React, { createContext, ReactNode, useState } from 'react'

interface IConfigProviderProps {
  children: ReactNode
}

interface IConfigContextData {
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
  minutes: number
  setMinutes: React.Dispatch<React.SetStateAction<number>>
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  secondsAmount: number
  setSecondsAmount: React.Dispatch<React.SetStateAction<number>>
}

export const ConfigContext = createContext<IConfigContextData>(
  {} as IConfigContextData
)

export function ConfigProvider({ children }: IConfigProviderProps) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(3)
  const [language, setLanguage] = useState('JS')
  const [secondsAmount, setSecondsAmount] = useState(180)

  return (
    <ConfigContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        language,
        setLanguage,
        secondsAmount,
        setSecondsAmount,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
