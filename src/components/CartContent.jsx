import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const CartContent = () => {
  const { cart, removeFromCart, formatPrice, handleQuantityChange } =
    useContext(PizzaContext)

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
                  onChange={event => handleQuantityChange(event, pizza.id)}
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

  return <>{cartContent}</>
}

export default CartContent
