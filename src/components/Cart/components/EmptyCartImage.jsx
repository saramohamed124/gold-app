import { Container } from 'react-bootstrap';
import cart_empty from '../assets/imgs/cart_empty.jpg';


function EmptyCartImage(){
    return(
        <Container className='mt-7 pt-5 text-center'>
        <h1>No Products To Show</h1>
        <img src={cart_empty} alt='cart-empty' style={{maxWidth:'60%',maxHeight:"60%"}}/>
        </Container>
    )
}
export default EmptyCartImage