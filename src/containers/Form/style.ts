import { Link } from 'react-router-dom'
import Mask from 'react-input-mask'
import styled from 'styled-components'
import { SaveButton } from '../../components/Buttons/style'

export const FormContainer = styled.div`
  border: 3px solid #00ffef;
  width: 480px;
  height: 620px;
  border-radius: 20px;
  padding: 60px;
  display: block;
  background-color: #000;
  margin-left: 250px;

  color: #00ffef;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 60px 20px;
  }
`

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: 1px solid #00ffef;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  color: #000;
  background-color: #00ffef;
  cursor: pointer;
`

export const Form = styled.form`
  padding-top: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    border-bottom: solid 1px #00ffef;
    color: #00ffef;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: var(--size-label-medium);
  margin-bottom: 4px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #00ffef;
  background-color: #000;
  margin: 4px 0 16px;
  font-size: var(--size-text-small);
  color: #00ffef;
  text-indent: 12px;
  font-weight: 500;
`

export const InputMask = styled(Mask).attrs({
  type: 'text'
})`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #00ffef;
  background-color: #000;
  margin: 4px 0 16px;
  font-size: var(--size-text-small);
  color: #00ffef;
  text-indent: 12px;
  font-weight: 500;
`

export const Genre = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-top: 10px;
  border-top: 1px solid #00ffef;

  & label,
  & input {
    color: #00ffef;
    cursor: pointer;
    font-size: var(--size-text-large);
  }
`

export const Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Select = styled.select`
  width: 120px;
  height: 40px;
  background-color: #00ffef;
  color: #000;
  font-weight: 600;
  font-size: var(--size-text-medium);
  border-radius: 12px;
  padding: 0 8px;
  text-transform: capitalize;
  cursor: pointer;
  }

  @media (max-width: 1023px) {
    width: 200px;
  }
`

export const SaveButtonForm = styled(SaveButton)`
  width: 180px;
  border: 1px solid #00ffef;
  background-color: #00ffef;
  color: #000;

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 1023px) {
    width: 320px;
  }
`
