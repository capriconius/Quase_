import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding: 40px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
  background-color: #000;
  border-bottom: 2px solid #00ffef;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
    padding: 20px 40px;
    height: 180px;
  }

  @media (max-width: 1023px) {
    padding: 40px 80px;
    height: 220px;
    display: flex;
    flex-direction: column;
  }
`

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 129px;

  img {
    margin-right: 30px;
    max-height: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 15px;

    & img {
      margin: 0 0 10px;
      max-height: 40px;
    }
  }
`

export const Title = styled.h1`
  color: #40e0d0;
  font-size: var(--size-heading);
  cursor: default;
`

export const Use = styled.div`
  display: flex;
  height: 40px;
  align-items: center;

  form {
    margin-right: 20px;
    border-radius: 8px;
    width: 320px;
    display: grid;
    grid-template-columns: 10% auto;
    align-items: center;
    padding: 10px 12px;
    cursor: text;

    @media (max-width: 1023px) {
      width: 280px;
    }
    @media (max-width: 768px) {
      width: 180px;
    }

    label {
      text-align: center;
      cursor: text;
      .bi {
        font-size: var(--size-text-medium);
        color: #00ffef;
        cursor: text;

        @media (max-width: 768px) {
          font-size: var(--size-text-small);
        }
      }
    }

    input {
      background-color: #000;
      color: #40e0d0;
      font-size: var(--size-text-small);
      padding: 10px;

      &::placeholder {
        position: relative;
        left: 89px;
        color: #00ffef;
        font-weight: 500;
      }
    }
  }
`

export const Link = styled(LinkRouter)`
  background-color: #40e0d0;
  border-radius: 12px;
  height: 46px;
  width: 170px;
  font-size: var(--size-label-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;

  @media (max-width: 1023px) {
    width: 180px;
    font-size: var(--size-text-medium);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 60px;
    flex-direction: column;
    font-size: var(--size-text-xsmall);
    text-align: center;
    padding: 0 10px;
  }

  i {
    font-size: 18px;
    margin-right: 6px;

    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
  }
`
