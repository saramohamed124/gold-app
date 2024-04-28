import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCartImage from './EmptyCartImage';
import { deleteFromCart } from '../../../rtk/slices/cartSlice';
import ClearAllBtn from './ClearAllBtn';
import BtnCheckout from '../../Checkout/components/BtnCheckout';

function CartProducts() {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  // Total Price (acc = 0)
  const totalPrice = cart.reduce((acc,product)=> {
    // Add All Product Price On Accumulator
    acc += product.price * product.quantity;
    // Return Accumulator
    return acc;
  },0)
  return (
    <Container>
      {/* Show Total Price */}
      <h1>Total Price : <span>{totalPrice.toFixed(2)} $</span></h1>
      {/* Show Clear All Button If cart.length > 0 */}
      {cart.length > 0 && <ClearAllBtn/>}
      <hr />
      {/* Show An Empty Cart Image Component if cart.length = 0 */}
      {
      cart.length === 0
      ?
      <EmptyCartImage/>
      :
      // Show Products in Table Otherwise
      <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product=>(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><img src={product.src} alt={product.title} style={{width:'100px',height:'100px'}}/></td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button></td>
              </tr>
              ))}
            </tbody>
            <BtnCheckout/>
      </Table>
      }
    </Container>
  );
}

export default CartProducts;