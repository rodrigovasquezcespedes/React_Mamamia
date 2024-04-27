import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PizzaProvider } from './context/PizzaContext'
import Home from './views/Home'
import PizzaDetail from './views/PizzaDetail'
import Cart from './views/Cart'
import NotFound from './views/NotFound'

function App () {
  return (
    <PizzaProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<PizzaDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </PizzaProvider>
  )
}

export default App
