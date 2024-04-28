import { Link } from "react-router-dom"

function BtnCheckout(){
    return(
        <div className="w-100 d-flex justify-content-center align-items-center" style={{margin:'25px auto'}}>
        <Link to={'checkout'} className="bg-warning text-white rounded text-decoration-none fs-5" style={{padding:'8px 16px'}}>Buy Now</Link>
        </div>
    )
}
export default BtnCheckout