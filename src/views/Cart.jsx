import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

function Cart () {
  const { cart, removeFromCart, clearCart, formatPrice } =
    useContext(PizzaContext)
  const [total, setTotal] = useState(calculateTotal())

  useEffect(() => {
    setTotal(calculateTotal())
  }, [cart])

  function calculateTotal () {
    return cart.reduce(
      (total, pizza) => total + pizza.price * (pizza.quantity || 1),
      0
    )
  }

  function handleChangeQuantity (event, pizzaId) {
    const newQuantity = parseInt(event.target.value)
    const updatedCart = cart.map(pizza => {
      if (pizza.id === pizzaId) {
        pizza.quantity = newQuantity
      }
      return pizza
    })
    setTotal(calculateTotal())
  }

  let cartContent
  if (cart.length === 0) {
    cartContent = <h3 className='text-center'>El carrito está vacío.</h3>
  } else {
    cartContent = cart.map(pizza => (
      <div key={pizza.id} className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-2'>
            <img
              src={pizza.img}
              alt={pizza.name}
              className='img-fluid rounded-start w-75 p-2 m-3'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body d-flex align-items-center'>
              <div className='d-flex flex-column align-items-start me-auto'>
                <h5 className='card-title'>{pizza.name.toUpperCase()}</h5>
                <h4 className='card-text'>
                  Precio: ${formatPrice(pizza.price)}
                </h4>
              </div>
              <div className='d-flex align-items-center'>
                <input
                  type='number'
                  value={pizza.quantity || 1}
                  min='1'
                  onChange={event => handleChangeQuantity(event, pizza.id)}
                  className='form-control m-2 w-25'
                />
                <button
                  className='btn btn-danger'
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  let cartSummary
  if (cart.length > 0) {
    cartSummary = (
      <div className='card m-1'>
        <div className='card-body'>
          <h5 className='card-title'>Resumen del Carrito</h5>
          <h2 className='card-subtitle mb-2'>
            Total a Pagar: ${formatPrice(total)}
          </h2>
          <Link to='/checkout' className='btn btn-primary me-2'>
            Proceder al Pago
          </Link>
          <button className='btn btn-secondary' onClick={clearCart}>
            Vaciar Carrito
          </button>
          <Link to='/'>
            <button className='btn btn-warning m-2'>
              Agregar más productos
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='container bg-white rounded-4 mt-5'>
      <h1 className='text-center text-danger'>Carrito de Compras</h1>
      {cartContent}
      {cartSummary}
    </div>
  )
}

export default Cart
