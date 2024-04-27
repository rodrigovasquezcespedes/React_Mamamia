import { Card } from 'react-bootstrap'
import image from '../assets/banner.png'
const Banner = () => {
  return (
    <Card className='border-5 border-secondary mb-4'>
      <Card.Img className='w-100 h-25' src={image} />
    </Card>
  )
}

export default Banner