import { useSelector } from "react-redux";

function ProductInformation(){
    const cart = useSelector(state=>state.cart)
        // Total Price (acc = 0)
    const totalPrice = cart.reduce((acc,product)=> {
        // Add All Product Price On Accumulator
        acc += product.price * product.quantity;
        // Return Accumulator
        return acc;
    },0)
    return(
        <div className="my-3">
            <div>
            <h1>Products Details: </h1>
            <hr />
                {cart.map(product=>(
                   <div key={product.id}>
                   <p><span className="fw-bold">Title: </span>{product.title}</p>
                   <p><span className="fw-bold">Quantity: </span>{product.quantity}</p>
                   <p><span className="fw-bold">Price: </span>{product.price} $</p>
                   <hr />
                   </div> 
                ))}
            </div>
            <h6>Total: <span>{totalPrice.toFixed(2)} $</span></h6>
            <hr />
        </div>
    )
}
export default ProductInformation