import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CodeArea,
  Countdown,
  CountdownContainer,
  DashboardContainer,
  QuestionBox,
  UserContainer,
} from './styles'
import { useConfig } from '../../hooks/useConfig'
import { SiJavascript, SiJava, SiC } from 'react-icons/si'
import { FaRegLightbulb } from 'react-icons/fa'

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

  const renderLanguageLogo = () => {
    if (language === 'JS') {
      return <SiJavascript size={32} />
    } else if (language === 'JAVA') {
      return <SiJava size={32} />
    } else if (language === 'C') {
      return <SiC size={32} />
    } else if (language === 'PORTUGOL') {
      return <FaRegLightbulb size={32} />
    }
  }

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
      return setSecondsAmount(minutes * 60 + seconds)
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
      <QuestionBox>
        {renderLanguageLogo()}
        <p>
          Crie uma função que recebe um numero por parâmetro <br /> e retorne
          true caso seja par e false caso seja impar
        </p>
      </QuestionBox>
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
