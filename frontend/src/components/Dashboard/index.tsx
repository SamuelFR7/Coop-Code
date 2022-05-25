import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CodeArea,
  Countdown,
  CountdownContainer,
  DashboardContainer,
  UserContainer,
} from './styles'
import { useConfig } from '../../hooks/useConfig'

interface IUser {
  avatar: string
  name: string
}

function Dashboard() {
  const { seconds, minutes, language, secondsAmount, setSecondsAmount } =
    useConfig()
  const [userOne, setUserOne] = useState<IUser>()
  const [userTwo, setUserTwo] = useState<IUser>()
  const [yourTime, setYourtime] = useState<boolean>(true)
  const [code, setCode] = useState('')

  useEffect(() => {
    function setInitialCode() {
      if (language === 'JS') {
        setCode('function hello() {\n\n}')
      } else if (language === 'JAVA') {
        setCode(
          'class App {\n  public static void main(String[] args) {\n\n  }\n}'
        )
      } else if (language === 'C') {
        setCode('void main() {\n\n}')
      } else if (language === 'VISUALG') {
        setCode('algoritmo\n\n  var\n\n  inicio\n\nfimalgoritmo')
      }
    }

    setInitialCode()
  }, [language])

  useEffect(() => {
    async function getUsersImage() {
      const responseUserOne = await axios.get(
        'https://api.github.com/users/vnmartinez'
      )
      setUserOne({
        avatar: responseUserOne.data.avatar_url,
        name: responseUserOne.data.name,
      })

      const responseUserTwo = await axios.get(
        'https://api.github.com/users/lucianomartinsjr'
      )
      setUserTwo({
        avatar: responseUserTwo.data.avatar_url,
        name: responseUserTwo.data.name,
      })
    }

    getUsersImage()
  }, [])

  useEffect(() => {
    if (secondsAmount === 0) {
      setYourtime(!yourTime)
      setSecondsAmount(minutes * 60 + seconds)
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1)
    }, 1000)
  }, [secondsAmount])

  const minutesToView = Math.floor(secondsAmount / 60)
  const secondsToview = secondsAmount % 60

  return (
    <DashboardContainer>
      <CountdownContainer>
        <UserContainer className={yourTime ? 'yourTime' : 'notYourTime'}>
          <img src={userOne?.avatar} />
          <span>{userOne?.name}</span>
        </UserContainer>
        <Countdown>
          <span>{String(minutesToView).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(secondsToview).padStart(2, '0')}</span>
        </Countdown>
        <UserContainer className={!yourTime ? 'yourTime' : 'notYourTime'}>
          <img src={userTwo?.avatar} />
          <span>{userTwo?.name}</span>
        </UserContainer>
      </CountdownContainer>
      <CodeArea>
        <textarea
          disabled={!yourTime}
          className={!yourTime ? 'disabled' : 'enabled'}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </CodeArea>
    </DashboardContainer>
  )
}

export default Dashboard
