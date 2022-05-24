import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CountdownContainer = styled.div`
  padding: 1rem;
  font-size: 36px;
  font-weight: 600;
  display: flex;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  span {
    padding-top: 0.5rem;
  }
`

export const Countdown = styled.div`
  padding: 1rem 4rem;
`

export const CodeArea = styled.div`
  padding: 4rem 0;
  display: flex;

  textarea {
    border: 1px solid #d7d7d7;
    height: 80vh;
    width: 60vw;
    padding: 0.3rem 0.5rem;
    resize: none;
    font-size: 1.5rem;
  }
`
