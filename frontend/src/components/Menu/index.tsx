import React, { useState } from 'react'
import {
  FormBox,
  MenuContainer,
  MenuContent,
  MenuForm,
  TimeBox,
  TimeInputBox,
} from './styles'

function Menu() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [language, setLanguage] = useState('JS')

  function handleSubmit() {
    console.log('submit')
  }

  return (
    <MenuContainer>
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
