import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

function Home () {
  const { pizzas } = useContext(PizzaContext)

  return (
    <div>
      <h1>Catálogo de Pizzas</h1>
      <div className='pizza-list'>
        {pizzas.map(pizza => (
          <div key={pizza.id} className='pizza-item'>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p>Precio: ${pizza.price}</p>
            <Link to={`/pizza/${pizza.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
