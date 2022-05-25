import { useContext } from 'react'
import { ConfigContext } from '../../context/ConfigContext'

export function useConfig() {
  const context = useContext(ConfigContext)

  return context
}
