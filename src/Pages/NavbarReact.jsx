import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaCartProduct from '../components/Cart/components/MediaCartProduct';

function NavbarReact() {
  // Store A Part Of The Redux Store's State (Cart)
  const cart = useSelector(state=>state.cart)
  return (
    <Navbar fixed='top' expand="lg" className="bg-warning">
      <Link to={'/'} className='navbar-brand fw-semibold'>Gold E Commerce</Link>
          <Nav className="me-auto d-flex justify-content-between align-items-center text-center g-4">
            <Link to="shop" className='nav-link'>Shop</Link>
            <Link to="cart" className='nav-link d-flex justify-content-center align-items-center'>Cart -  <span className='d-flex justify-content-center flex-row bg-danger text-white rounded-circle' style={{padding: "3px 10px",margin:" auto 10px"}}>{cart.length}</span></Link>
          </Nav>
          <MediaCartProduct/>
    </Navbar>
  );
}

export default NavbarReact;