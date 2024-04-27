import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

function PizzaDetail () {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContext)

  // Busca la pizza con el ID proporcionado en los datos del contexto
  const pizza = pizzas.find(pizza => pizza.id === id)

  if (!pizza) {
    return <p>No se encontró la pizza.</p>
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default PizzaDetail
