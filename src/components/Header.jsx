import { Container} from "react-bootstrap";
import jewlery_shop from "./assets/imgs/jewelry_shop.gif"
function Header(){
    return(
        <Container>
            <img src={jewlery_shop} alt="jewlery shop" style={{width:"100%"}}/>
            <h1>Hello To Our Gold Store</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati at dignissimos molestiae repellendus similique quidem est magnam. Labore porro earum repellendus dolorem quam adipisci, nam optio alias! Velit, quisquam nemo.</p>
        </Container>
    )
}
export default Header;