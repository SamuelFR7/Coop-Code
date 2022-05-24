import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CodeArea,
  Countdown,
  CountdownContainer,
  DashboardContainer,
  UserContainer,
} from './styles'

const COUNTDOWN_INITIAL_TIME = 3 * 60

interface IUser {
  avatar: string
  name: string
}

function Dashboard() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME)
  const [userOne, setUserOne] = useState<IUser>()
  const [userTwo, setUserTwo] = useState<IUser>()

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
      return
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1)
    }, 1000)
  }, [secondsAmount])

  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60

  return (
    <DashboardContainer>
      <CountdownContainer>
        <UserContainer>
          <img src={userOne?.avatar} />
          <span>{userOne?.name}</span>
        </UserContainer>
        <Countdown>
          <span>{String(minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, '0')}</span>
        </Countdown>
        <UserContainer>
          <img src={userTwo?.avatar} />
          <span>{userTwo?.name}</span>
        </UserContainer>
      </CountdownContainer>
      <CodeArea>
        <textarea disabled={secondsAmount === 0}></textarea>
      </CodeArea>
    </DashboardContainer>
  )
}

export default Dashboard
