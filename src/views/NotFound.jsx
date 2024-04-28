import { FaExclamationTriangle } from 'react-icons/fa'

function NotFound () {
  return (
    <div className='text-center text-warning p-5'>
      <h1 className='p-5'>Página no encontrada</h1>
      <p className='fs-5'>Lo sentimos, la página que estás buscando no existe.</p>
      <FaExclamationTriangle style={{ fontSize: '50px', color: 'red' }} />
    </div>
  )
}

export default NotFound
