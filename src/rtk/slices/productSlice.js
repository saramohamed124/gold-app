import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../api/products";

export const fetchData = createAsyncThunk(
    'productSlice/fetchData',
    async () => {
      // Simulate async fetch
      return data;
    }
);
const productSlice = createSlice({
    initialState:[],
    name:"productSlice",
    // Actions On Our Reducer
    reducers:{},
    // Function Take Builder To Add Cases
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

// Export Actions From productSlice
export  const {} = productSlice.actions;
export default productSlice.reducer;