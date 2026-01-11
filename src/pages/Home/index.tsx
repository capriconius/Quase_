import ContactList from '../../containers/ContactList'
import Header from '../../containers/Header'
import { Container } from '../../styles'

const Home = () => (
  <main>
    <Header />
    <Container>
      <ContactList />
    </Container>
  </main>
)

export default Home
