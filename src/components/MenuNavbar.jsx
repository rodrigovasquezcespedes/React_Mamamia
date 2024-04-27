import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const MenuNavbar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? 'text-warning' : 'text-white'
  return (
    <Navbar className='bg-primary' expand='lg'>
      <NavLink style={{ marginLeft: '30px' }} className={setActiveClass} to='/'>
        Mamma Mia! SPA
      </NavLink>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav style={{ marginLeft: 'auto', marginRight: '50px' }}>
          <NavLink className={setActiveClass} to='/carrito'>
            <FaShoppingCart /> Carrito
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuNavbar
