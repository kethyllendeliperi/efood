import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'
import HeaderTrattoria from './components/HeaderTrattoria'
import Banner from './components/Banner'
import MenuList from './components/MenuOptions'
import HeaderHome from './components/HeaderHome'
import TrattoriaOptions from './components/MenuTrattoriaOptions'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderHome />
        <div className="container">
          <MenuList />
        </div>
      </>
    )
  },
  {
    path: '/perfil',
    element: (
      <>
        <HeaderTrattoria />
        <Banner />
        <div className="container">
          <TrattoriaOptions />
        </div>
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
