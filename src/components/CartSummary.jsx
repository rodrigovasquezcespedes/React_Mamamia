import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

const CartSummary = () => {
  const {
    cart,
    clearCart,
    formatPrice,
    calculateTotal,
    totalQuantity
  } = useContext(PizzaContext)

  let cartSummary

  if (cart.length > 0) {
    cartSummary = (
      <div className='card m-1'>
        <div className='card-body'>
          <h5 className='card-title'>Resumen del Carrito</h5>
          <p>Cantidad de Productos: {totalQuantity}</p>
          <h2 className='card-subtitle mb-2'>
            Total a Pagar: ${formatPrice(calculateTotal())}
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
  } else {
    cartSummary = null // Mostrar nada si el carrito está vacío
  }

  return cartSummary
}

export default CartSummary
