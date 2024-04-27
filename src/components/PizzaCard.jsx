import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaPizzaSlice } from 'react-icons/fa'

function PizzaCard ({ pizza }) {
  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // Función para renderizar la lista de ingredientes
  const renderIngredients = () => {
    const ingredientsList = []
    for (let i = 0; i < pizza.ingredients.length; i++) {
      ingredientsList.push(
        <li key={i}>
          <FaPizzaSlice /> {pizza.ingredients[i]}
        </li>
      )
    }
    return ingredientsList
  }

  return (
    <Card className='border-5 border-warning rounded'>
      <Card.Img className='p-2 h-75 rounded' src={pizza.img} />
      <Card.Body>
        <Card.Title className='border-bottom border-2 border-dark my-4 text-center fw-bold mx-2'>
          {pizza.name.toUpperCase()}
        </Card.Title>
        <Card.Text className='border-bottom border-2 border-dark'>
          Ingredientes:
          <ul className='list-unstyled'>{renderIngredients()}</ul>
        </Card.Text>
        <Card.Text className='text-center fw-bold fs-2'>
          ${formatPrice(pizza.price)}
        </Card.Text>
        <Button
          as={Link}
          to={`/pizza/${pizza.id}`}
          variant='primary'
          className='mr-2 m-2'
        >
          Ver Detalle
        </Button>
        <Button as={Link} to={`/pizza/${pizza.id}`} variant='danger'>
          <FaShoppingCart />
          Agregar
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PizzaCard
