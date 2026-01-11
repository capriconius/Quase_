import styled from 'styled-components'
import { Button } from '../../styles'

// Botão de edição
export const EditButton = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--size-label-small);
  font-weight: 600;
  width: 80px;
  height: 50px;
  margin-right: 16px;
  cursor: pointer;

  & .bi {
    margin-right: 6px;
    font-size: 10px;
  }

  }
`

// Botão de remover
export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
  width: 38px;
  height: 38px;
  cursor: pointer;

  .bi {
    font-size: var(--size-label-medium);
    font-weight: 600;
  }
`

// Botão de salvar (herda estilo base do Button)
export const SaveButton = styled(Button)`
  background-color: #00ffef;
  color: #000;
  font-weight: 600;
`
