import checkout_img from '../assets/imgs/checkout_img.gif'
function CheckoutHeader(){
    return(
        <div className='mt-7 d-flex justify-content-between flex-row-reverse align-items-center flex-wrap'>
            <div>
                <h1 style={{color:"#E86C00"}}>Check Out</h1>
                <p className=' w-75 ' style={{margin:'20px auto'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ullam maxime tempore iusto ipsam doloribus!</p>
            </div>
        <img className='img-gif' style={{margin:'10px auto'}} src={checkout_img} alt='checkout img'/>
        </div>
    )
}
export default CheckoutHeader