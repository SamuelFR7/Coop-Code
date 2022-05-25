import React, { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { useConfig } from '../hooks/useConfig'
import {
  FormBox,
  MenuContainer,
  MenuContent,
  MenuForm,
  TimeBox,
  TimeInputBox,
} from './styles'
import Logo from '../../assets/Logo.svg'

function Menu() {
  const {
    minutes,
    setMinutes,
    setLanguage,
    seconds,
    setSeconds,
    setSecondsAmount,
  } = useConfig()
  const router = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSecondsAmount(minutes * 60 + seconds)
    router.push('/main')
  }

  return (
    <MenuContainer>
      <Logo width={256} height={256} />
      <MenuContent>
        <MenuForm onSubmit={handleSubmit}>
          <h1>Configurar Sala</h1>
          <FormBox>
            <h3>Linguagem</h3>
            <select
              defaultValue={'JS'}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value={'JS'}>Javascript</option>
              <option value={'JAVA'}>Java</option>
              <option value={'C'}>C</option>
              <option value={'VISUALG'}>Visualg</option>
            </select>
            <TimeBox>
              <h3>Tempo</h3>
              <TimeInputBox>
                <div>
                  <span>Minutos</span>
                  <input
                    value={minutes}
                    type="number"
                    onChange={(e) => setMinutes(Number(e.target.value))}
                  />
                </div>
                <div>
                  <span>Segundos</span>
                  <input
                    value={seconds}
                    type="number"
                    onChange={(e) => setSeconds(Number(e.target.value))}
                  />
                </div>
              </TimeInputBox>
            </TimeBox>
            <button type="submit">Confirmar</button>
          </FormBox>
        </MenuForm>
      </MenuContent>
    </MenuContainer>
  )
}

export { Menu }
