import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from "../rtk/slices/productSlice";
import { Card,  Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Products(){
    // Dispatch To Send Action To Store
    const dispatch = useDispatch();
    // Access Data From Redux Store
    const products = useSelector((state)=>state.products);
    // Handle Side Effect in Functional Conponents
    useEffect(()=>{
        // Access Data When The Component Mounts
        dispatch(fetchData())
    },[])
return(
    <Container>
        <Row>
            {products.map((product)=>(
            <Col key={product.id}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={product.src} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
)
}
export default Products