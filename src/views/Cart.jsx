import CartContent from '../components/CartContent'
import CartSummary from '../components/CartSummary'

const Cart = () => {
  return (
    <div className='container bg-white rounded-4 mt-5'>
      <h1 className='text-center text-danger'>Carrito de Compras</h1>
      <CartContent />
      <CartSummary />
    </div>
  )
}

export default Cart
