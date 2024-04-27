import { useContext } from 'react'
import PizzaCard from '../components/PizzaCard'
import { Container, Row, Col } from 'react-bootstrap'
import Banner from '../components/Banner'
import { PizzaContext } from '../context/PizzaContext'

function Home () {
  const { pizzas } = useContext(PizzaContext)

  return (
    <div>
      <Banner />
      <Container>
        <Row className='g-4'>
          {pizzas.map(pizza => (
            <Col key={pizza.id} md={3}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home
