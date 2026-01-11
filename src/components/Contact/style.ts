import styled from 'styled-components'

export const ContactName = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
`

export const ProfileIcon = styled.span`
  margin-right: 8px;
  font-size: 1.4rem;
`

export const ContactTag = styled.span`
  font-size: 0.85rem;
  color: var(--text-secondary, #b0b7c3);
  margin-left: 8px;
`

export const ContactPhone = styled.div`
  color: var(--text-secondary, #b0b7c3);
  display: flex;
  align-items: center;
`

export const ContactEmail = styled.div`
  color: var(--text-secondary, #b0b7c3);
  display: flex;
  align-items: center;
`

export const ContactActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`

export const EditButton = styled.button`
  background-color: var(--accent, #7c4dff);
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`
