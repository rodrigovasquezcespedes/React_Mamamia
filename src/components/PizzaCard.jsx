import { Card, Button } from 'react-bootstrap'
import { LuPizza } from 'react-icons/lu'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { PizzaContext } from '../context/PizzaContext'
import React, { useContext } from 'react'

function PizzaCard ({ pizza }) {
  const { formatPrice } = useContext(PizzaContext)
  return (
    <Card className='border-5 border-warning rounded'>
      <Card.Img className=' w-100 rounded' src={pizza.img} />
      <Card.Body>
        <Card.Title className='border-bottom border-2 border-dark text-center fw-bold'>
          {pizza.name.toUpperCase()}
        </Card.Title>
        <Card.Text className='border-bottom border-2 border-dark'>
          Ingredientes:
          <ul className='list-unstyled'>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>
                <LuPizza /> {ingredient}
              </li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text className='text-center fw-bold fs-2'>
          ${formatPrice(pizza.price)}
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Link to={`/pizza/${pizza.id}`}>
            <Button className='bg-primary' style={{ fontSize: '0.8rem' }}>
              <MdOutlineRemoveRedEye className='mr-1' /> Detalles
            </Button>
          </Link>
          <Buttons id={pizza.id} />
        </div>
      </Card.Body>
    </Card>
  )
}

export default PizzaCard
