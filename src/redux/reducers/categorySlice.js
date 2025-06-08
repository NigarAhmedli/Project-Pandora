import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getCategoryThunk = createAsyncThunk('api/category', async () => {
    const response = await axios.get('')

    return response.data
})




export const categorySlice = createSlice({
    name: 'category',
     initialState: {
        category: []
     },
     reducers:{},

     extraReducers: builder => {
        builder 

        .addCase(getCategoryThunk.fulfilled, (state,action) => {
            state.loading =false
            state.category= action.payload
        })

        .addCase(getCategoryThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(getCategoryThunk.rejected, (state,action) => {
            state.loading=false
            state.error= action.error.message
        })


       
     }
})


export default categorySlice.reducer;