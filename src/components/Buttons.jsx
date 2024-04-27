import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import { IoCartOutline } from 'react-icons/io5'
import { Button } from 'react-bootstrap'

const Buttons = ({ id, style }) => {
  const { pizzas, addToCart } = useContext(PizzaContext)
  console.log(style)
  const handleAddToCart = () => {
    const pizzaToAdd = pizzas.find(pizza => pizza.id === id)
    if (pizzaToAdd) {
      addToCart(pizzaToAdd)
      console.log(`Se agregó ${pizzaToAdd.name} al carrito`)
    } else {
      console.error(`No se encontró la pizza con ID ${id}`)
    }
  }

  return (
    <div className='d-flex justify-content-between'>
      <Button
        variant='danger'
        className={style}
        style={{ fontSize: '0.8rem' }}
        onClick={handleAddToCart}
      >
        <IoCartOutline />
        Agregar
      </Button>
    </div>
  )
}

export default Buttons
