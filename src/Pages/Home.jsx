// React Bootstrap Import
import { Container } from "react-bootstrap";
// Component Import
import ImgHeader from "../components/Home/components/ImgHeader";
import TextWelcome from "../components/Home/components/TextWelcome";

function Home (){
    return(
        <Container className="mt-7 pt-5">
            <TextWelcome/>
            <ImgHeader/>
        </Container>
    )
}
export default Home;