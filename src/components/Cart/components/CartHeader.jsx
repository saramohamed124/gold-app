import ImgCart from "./ImgCart";

function CartHeader(){
    return(
        <div className="mt-5">
            <div>
                <h1>Hello To Cart</h1>
                <p>Your Products will be showed here.</p>
            </div>
            <ImgCart/>
        </div>
    )
}
export default CartHeader;