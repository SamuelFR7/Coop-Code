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
}

export const ConfigContext = createContext<IConfigContextData>(
  {} as IConfigContextData
)

export function ConfigProvider({ children }: IConfigProviderProps) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [language, setLanguage] = useState('JS')
  return (
    <ConfigContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        language,
        setLanguage,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
