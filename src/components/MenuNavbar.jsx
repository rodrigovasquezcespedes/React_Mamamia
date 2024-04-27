import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const MenuNavbar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? 'text-warning' : 'text-white'
  return (
    <>
      <Navbar className='bg-secondary fixed-top' expand='lg'>
        <NavLink
          style={{ marginLeft: '30px' }}
          className='text-white fs-5'
          to='/'
        >
          Mamma Mia! SPA
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav style={{ marginLeft: 'auto', marginRight: '50px' }}>
            <NavLink className={setActiveClass} to='/Cart'>
              <FaShoppingCart /> Carrito
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MenuNavbar
