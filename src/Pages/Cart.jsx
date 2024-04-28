import CartHeader from "../components/Cart/components/CartHeader"
import {Container} from "react-bootstrap";
import CartProducts from "../components/Cart/components/CartProducts";

function Cart (){
return(
    <Container className="mt-5 pt-5">
        <CartHeader/>
        <CartProducts/>
    </Container>
)
}
export default Cart