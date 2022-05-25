import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`

export const CountdownContainer = styled.div`
  padding: 1rem;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  background: #f5f5f5;
  border-radius: 1rem;
  margin-top: 1.5rem;

  .yourTime {
    img {
      border: 3px solid ${theme.colors.yourTime};
    }
  }

  .notYourTime {
    img {
      border: 3px solid ${theme.colors.notYourTime};
      opacity: 30%;
    }

    span {
      opacity: 30%;
    }
  }
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

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;

  p {
    margin-left: 1rem;
  }
`

export const CodeArea = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;

  textarea {
    background: ${theme.colors.textarea};
    color: #f8f8f2;
    border: 1px solid #d7d7d7;
    border-radius: 1rem;
    height: 70vh;
    width: 60vw;
    padding: 0.3rem 0.5rem;
    resize: none;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .disabled {
    cursor: not-allowed;
  }
`
