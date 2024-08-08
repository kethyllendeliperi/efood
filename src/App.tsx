import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { Container, GlobalCss } from './styles'
import Footer from './components/Footer'
import MenuList from './components/MenuList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MenuList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
      <Footer />
    </>
  )
}

export default App
