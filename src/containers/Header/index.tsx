import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './style'
import ListaIcon from '../../assets/medias/lista.png'
import { setSearch } from '../../store/reducers/filter'

const Header = () => {
  const inputHeaderRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const { search } = useSelector((state: RootState) => state.filter)

  return (
    <S.HeaderContainer>
      <S.LogoTitle>
        <img src={ListaIcon} alt="Ícone de lista de contatos" />
        <S.Title>lista telefonica</S.Title>
      </S.LogoTitle>
      <S.Use>
        <form onClick={() => inputHeaderRef.current?.focus()}>
          <label htmlFor="search">
            <i className="bi bi-search"></i>
          </label>
          <input
            id="search"
            type="text"
            placeholder="Pesquisar"
            ref={inputHeaderRef}
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </form>
        <S.Link to={'/new'}>
          <i className="bi bi-person-plus-fill"></i>
          Adicionar Contato
        </S.Link>
      </S.Use>
    </S.HeaderContainer>
  )
}

export default Header
