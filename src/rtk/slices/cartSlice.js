import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        // Add Product To Cart
        addToCart:(state,action)=>{
            const findProduct = state.find((product)=>product.id ===action.payload.id);
            if(findProduct){
                findProduct.quantity +=1;
            }else{
                const productClone = {...action.payload,quantity:1}
            // Push Action Payload on Your State
            // state.push(action.payload);
            state.push(productClone);
            }
        },
        // Delecte Product From Cart
        deleteFromCart:(state,action)=>{
            // Filter All Products Which Hasn't The Same Id of Product (aciton.payload.id)
            // Action Payload id => It is Product That We Showed It
            return state.filter((product)=>product.id !== action.payload.id)
        },
        // Clear All Products on Cart
        clear:(state,action)=>{
            // Return An Empty Array
            return []
        },
    }
})

export const {addToCart,deleteFromCart,clear} = cartSlice.actions;
export default cartSlice.reducer;