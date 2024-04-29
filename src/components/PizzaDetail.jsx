import { Row, Col, Image, Button } from 'react-bootstrap'
import Buttons from '../components/Buttons'
import { LuPizza } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { MdKeyboardReturn } from 'react-icons/md'
import { PizzaContext } from '../context/PizzaContext'
import React, { useContext } from 'react'

const PizzaDetail = ({ pizza }) => {
  const { formatPrice } = useContext(PizzaContext)
  return (
    <div className='bg-white mt-5 p-4 m-4 rounded-4 h-50 '>
      <h1 className='text-center'>{pizza.name.toUpperCase()}</h1>
      <Row>
        <Col md={6}>
          <Image className='rounded-4' src={pizza.img} alt={pizza.name} fluid />
        </Col>
        <Col md={6}>
          <p className='border-bottom border-top border-2 border-dark'>
            {pizza.desc}
          </p>
          <ul className='list-unstyled my-1'>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>
                <LuPizza className='m-1' />
                {ingredient}
              </li>
            ))}
          </ul>
          <h2>Precio: ${formatPrice(pizza.price)}</h2>
          <Buttons id={pizza.id} style='w-100 p-2 fs-5' />
        </Col>
        <Link to='/'>
          <Button
            className='bg-primary mt-2 p-2'
            style={{ fontSize: '0.8rem' }}
          >
            <MdKeyboardReturn /> Volver
          </Button>
        </Link>
      </Row>
    </div>
  )
}

export default PizzaDetail
