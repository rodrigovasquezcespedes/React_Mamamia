import { useContext } from 'react'
import { Table, Button } from 'react-bootstrap'
import { PizzaContext } from '../context/PizzaContext'

const Checkout = () => {
  const { cart, total, formatPrice } = useContext(PizzaContext)

  const handlePrint = () => {
    window.print()
  }
  return (
    <div className='p-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.name}</td>
              <td>{formatPrice(pizza.price)}</td>
              <td>{pizza.quantity || 1}</td>
              <td>{formatPrice(pizza.price * (pizza.quantity || 1))}</td>
            </tr>
          ))}
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Total: {formatPrice(total)}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant='primary' onClick={handlePrint}>
        Imprimir
      </Button>
    </div>
  )
}

export default Checkout
