import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCartImage from './EmptyCartImage';
import { Button } from 'react-bootstrap';
import { deleteFromCart } from '../../../rtk/slices/cartSlice';
import BtnCheckout from '../../Checkout/components/BtnCheckout';

function MediaCartProduct() {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
  return (
    <>
    {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{maxWidth:'fit-content'}}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Cart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {
      cart.length === 0
      ?
      <EmptyCartImage/>
      :
      // Show Products in Table Otherwise
            <div className='px-2 d-flex flex-column gap-4 justify-content-between'>
              {cart.map(product=>(
                <div className=' w-100 p-4 d-flex justify-content-center flex-column align-items-center border-1 border border-warning rounded' key={product.id}>
               <img src={product.src} alt={product.title} style={{width:'100%',height:'100%'}}/>
              <h5 className='text-center my-3'> <span className='fs-5'>Title: </span>{product.title}</h5>
               <p><span>Price: </span>{product.price} $</p>
               <p><span>Quantity: </span>{product.quantity}</p>
               <Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>X</Button>
              </div>
              ))}
              <BtnCheckout/>
            </div>
      }  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MediaCartProduct;