import { Container } from "react-bootstrap"
import CheckoutHeader from "../components/Checkout/components/CheckoutHeader"
import CheckoutForm from "../components/Checkout/components/CheckoutForm"
import ProductInformation from "../components/Checkout/components/ProductInformation"

function Checkout(){
    return(
        <Container className="mt-7 mb-3">
            <CheckoutHeader/>
            <ProductInformation/>
            <CheckoutForm/>
        </Container>
    )
}
export default Checkout