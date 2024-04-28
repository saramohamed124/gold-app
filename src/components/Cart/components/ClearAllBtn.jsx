import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { clear } from "../../../rtk/slices/cartSlice"

function ClearAllBtn(){
    const dispatch = useDispatch()
return(
    <>
    <Button variant='danger' onClick={()=>dispatch(clear())}>Clear Cart</Button>
    </>
)
}
export default ClearAllBtn