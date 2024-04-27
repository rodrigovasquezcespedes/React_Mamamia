import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

function Cart () {
  const { cart, removeFromCart, clearCart } = useContext(PizzaContext)

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0)
  }

  let cartContent
  if (cart.length === 0) {
    cartContent = <p>El carrito está vacío.</p>
  } else {
    cartContent = cart.map(pizza => (
      <div key={pizza.id} className='cart-item'>
        <img src={pizza.img} alt={pizza.name} />
        <div>
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price}</p>
          <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
        </div>
      </div>
    ))
  }

  let cartSummary
  if (cart.length > 0) {
    cartSummary = (
      <div className='cart-summary'>
        <h3>Total a Pagar: ${calculateTotal()}</h3>
        <Link to='/checkout'>
          <button>Proceder al Pago</button>
        </Link>
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div className='cart-items'>{cartContent}</div>
      {cartSummary}
    </div>
  )
}

export default Cart
