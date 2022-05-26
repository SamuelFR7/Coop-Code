import React, { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { useConfig } from '../../hooks/useConfig'
import {
  FormBox,
  MenuContainer,
  MenuContent,
  MenuForm,
  TimeBox,
  TimeInputBox,
} from './styles'
import Logo from '../../assets/NewLogo.svg'

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

    const secondsToSet = minutes * 60 + seconds
    if (secondsToSet < 1) {
      setSecondsAmount(180)
    } else {
      setSecondsAmount(minutes * 60 + seconds)
    }

    router.push('/main')
  }

  return (
    <MenuContainer>
      <Logo width={250} height={250} />
      <MenuContent>
        <MenuForm onSubmit={handleSubmit}>
          <h1>Configurar Sala</h1>
          <FormBox>
            <h3>Linguagem</h3>
            <select
              defaultValue={'JAVA'}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value={'JAVA'}>Java</option>
              <option value={'JS'}>Javascript</option>
              <option value={'C'}>C</option>
              <option value={'PORTUGOL'}>Portugol</option>
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
