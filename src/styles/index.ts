// src/styles/index.ts
import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`

// Novo: botão padrão
export const Button = styled.button`
  padding: 8px 16px;
  background-color: #00ffef;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

// Novo: container para listas
export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const EstiloGlobal = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #21201fff;
  }
`

export default EstiloGlobal
