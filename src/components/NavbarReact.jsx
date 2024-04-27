import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarReact() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Link to={'/'} className='navbar-brand'>Gold E Commerce</Link>
          <Nav className="me-auto">
            <Link to="shop" className='nav-link'>Shop</Link>
            <Link to="cart" className='nav-link'>Cart</Link>
          </Nav>
    </Navbar>
  );
}

export default NavbarReact;