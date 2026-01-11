import styled from 'styled-components'

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 2fr 3.3fr 1.2fr;
  padding: 16px 20px;
  background-color: #000;
  font-weight: bold;
  border-bottom: 2px solid #ffffffff;
  margin: 240px 0 0 0;
`

export const HeaderCell = styled.div`
  text-align: left;
  color: #40e0d0;
`

export const Spacer = styled.div`
  height: 16px;
  background-color: #000;
`

export const ContactListContainer = styled.ul`
  list-style: none;
  padding: 8px 0;
  background-color: #000;
`

export const ContactItem = styled.li`
  display: grid;
  grid-template-columns: 2.5fr 2fr 3fr 1.5fr;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #000307ff;
  color: #40e0d0;
`
