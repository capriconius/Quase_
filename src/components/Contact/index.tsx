import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import * as S from './style'

type Props = Omit<ContactClass, 'getDisplayName'>

const Contact = ({ id, name, genre, relation, phone, email }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedPhone, setEditedPhone] = useState(phone)
  const [editedEmail, setEditedEmail] = useState(email)

  const handleSave = () => {
    dispatch(
      edit({
        id,
        name,
        genre,
        relation,
        phone: editedPhone,
        email: editedEmail,
        getDisplayName: function (): string {
          return `${this.name} (${this.phone})`
        }
      })
    )
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setEditedPhone(phone)
    setEditedEmail(email)
  }

  // Ícone por gênero
  const getIconByGenre = () => {
    if (genre === 'masculino') return '👨'
    if (genre === 'feminino') return '👩'
    return '👤'
  }

  return (
    <>
      <S.ContactName>
        <S.ProfileIcon>{getIconByGenre()}</S.ProfileIcon>
        {name} <S.ContactTag>{relation}</S.ContactTag>
      </S.ContactName>

      <S.ContactPhone>
        {isEditing ? (
          <input
            type="text"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
        ) : (
          phone
        )}
      </S.ContactPhone>

      <S.ContactEmail>
        {isEditing ? (
          <input
            type="text"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        ) : (
          email
        )}
      </S.ContactEmail>

      <S.ContactActions>
        {isEditing ? (
          <>
            <S.EditButton onClick={handleSave}>Salvar</S.EditButton>
            <S.DeleteButton onClick={cancelEdit}>Cancelar</S.DeleteButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setIsEditing(true)}>
              Editar
            </S.EditButton>
            <S.DeleteButton onClick={() => dispatch(remove(id))}>
              Excluir
            </S.DeleteButton>
          </>
        )}
      </S.ContactActions>
    </>
  )
}

export default Contact
