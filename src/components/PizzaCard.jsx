import { Card, Button } from 'react-bootstrap'
import { LuPizza } from 'react-icons/lu'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

function PizzaCard ({ pizza }) {
  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
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
