import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles'
import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/new', element: <Register /> },
  { path: '*', element: <div>Página não encontrada</div> }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <main>
        <RouterProvider router={routes} />
      </main>
    </Provider>
  )
}

export default App
