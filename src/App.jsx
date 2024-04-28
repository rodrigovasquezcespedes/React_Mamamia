import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import MenuNavBar from './components/MenuNavbar'
import Checkout from './views/Checkout'

function App () {
  return (
    <>
      <MenuNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
