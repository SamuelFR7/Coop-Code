import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const MenuContainer = styled.div`
  background-image: linear-gradient(
    to right top,
    #845ec2,
    #2c73d2,
    #008e9b,
    #0089ba,
    #0081cf,
    #008f7a
  );
`

export const MenuContent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuForm = styled.form`
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 1rem;
`

export const FormBox = styled.div`
  padding: 3rem;

  input,
  select {
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
  }

  select {
    width: 30rem;
    padding: 0.5rem;
    color: black;
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${theme.colors.primary};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TimeBox = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  margin-top: 1.5rem;
`

export const TimeInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.5rem 0;
    text-align: right;
  }
`
