import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootState } from '../../store'
import * as S from './style'

const ContactList = () => {
  const { items } = useSelector((state: RootState) => state.contacts)
  const { search } = useSelector((state: RootState) => state.filter)

  const contactFilter = () =>
    items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <S.HeaderRow>
        <S.HeaderCell>Nome</S.HeaderCell>
        <S.HeaderCell>Telefone</S.HeaderCell>
        <S.HeaderCell>Email</S.HeaderCell>
        <S.HeaderCell>Ações</S.HeaderCell>
      </S.HeaderRow>

      <S.Spacer />

      <S.ContactListContainer>
        {contactFilter().map((c) => (
          <S.ContactItem key={c.id}>
            <Contact
              id={c.id}
              name={c.name}
              genre={c.genre}
              relation={c.relation}
              phone={c.phone}
              email={c.email}
            />
          </S.ContactItem>
        ))}
      </S.ContactListContainer>
    </>
  )
}

export default ContactList
