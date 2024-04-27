import { FaExclamationTriangle } from 'react-icons/fa'

function NotFound () {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <FaExclamationTriangle style={{ fontSize: '50px', color: 'red' }} />
    </div>
  )
}

export default NotFound
