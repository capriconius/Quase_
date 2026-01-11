import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as enums from '../../utils/enums/contact'
import { register } from '../../store/reducers/contacts'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [genre, setGenre] = useState(enums.Genre.MALE)
  const [relation, setRelation] = useState(enums.Relation.NORMAL)

  const registerContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        name,
        genre,
        relation,
        phone,
        email,
        getDisplayName: function (): string {
          return `${this.name} (${this.phone})`
        }
      })
    )
    navigate('/')
  }

  return (
    <S.FormContainer>
      <S.BackButton to={'/'}>
        <i className="bi bi-arrow-left"></i>
        Voltar à página principal
      </S.BackButton>

      <S.Form onSubmit={registerContact}>
        <h2>Novo Contato</h2>

        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          id="name"
          type="text"
          placeholder="Nome do contato"
          required
        />

        <S.Label htmlFor="phone">Telefone</S.Label>
        <S.InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          id="phone"
          type="text"
          placeholder="Telefone do contato"
          required
        />

        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email do contato"
          required
        />

        <S.Genre>
          <div>
            <input
              value={enums.Genre.MALE}
              onChange={() => setGenre(enums.Genre.MALE)}
              name="genre"
              type="radio"
              id="male"
              checked={genre === enums.Genre.MALE}
            />{' '}
            <label htmlFor="male">Masculino</label>
          </div>
          <div>
            <input
              value={enums.Genre.FEMALE}
              onChange={() => setGenre(enums.Genre.FEMALE)}
              name="genre"
              type="radio"
              id="female"
              checked={genre === enums.Genre.FEMALE}
            />{' '}
            <label htmlFor="female">Feminino</label>
          </div>
        </S.Genre>

        <S.Checkout>
          <S.Select
            id="relation"
            value={relation}
            onChange={(e) => setRelation(e.target.value as enums.Relation)}
          >
            <option value="normal">{enums.Relation.NORMAL}</option>
            <option value="cônjuge">{enums.Relation.SPOUSE}</option>
            <option value="família">{enums.Relation.PARENTAL}</option>
            <option value="amigo">{enums.Relation.FRIEND}</option>
            <option value="trabalho">{enums.Relation.PROFESSIONAL}</option>
            <option value="serviço">{enums.Relation.SERVICE}</option>
          </S.Select>
          <S.SaveButtonForm type="submit">Salvar</S.SaveButtonForm>
        </S.Checkout>
      </S.Form>
    </S.FormContainer>
  )
}

export default Form
