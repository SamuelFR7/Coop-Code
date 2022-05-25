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
      border: 3px solid ${theme.colors.green};
    }
  }

  .notYourTime {
    img {
      border: 3px solid red;
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

export const CodeArea = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;

  textarea {
    background: ${theme.colors.textarea};
    color: #f8f8f2;
    border: 1px solid #d7d7d7;
    border-radius: 1rem;
    height: 80vh;
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
