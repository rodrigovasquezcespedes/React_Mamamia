import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'
import PizzaDetail from '../components/PizzaDetail'

function Detail () {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContext)

  // Busca la pizza con el ID proporcionado en los datos del contexto
  const pizza = pizzas.find(pizza => pizza.id === id)

  if (!pizza) {
    return <p>No se encontró la pizza.</p>
  }

  return <PizzaDetail pizza={pizza} />
}

export default Detail
