import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getBasketThunk = createAsyncThunk('get/basket', async () => {
    const response = await axios.get('http://localhost:5000/basket')

    return response.data
})


export const updateBasketThunk = createAsyncThunk('update/basket', async (product) => {
    const response = await axios.put(`http://localhost:5000/basket/${product._id}`, product)
    return response.data
})

export const deleteBasketThunk = createAsyncThunk('products/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5000/basket/${id}`)

    return id
})



export const postBasketThunk = createAsyncThunk('post/basket', async (data) => {
    const response = await axios.post('http://localhost:5000/basket', data)

    return data
})




export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {},

    extraReducers: builder => {
        builder

            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.basket = action.payload
            })

            .addCase(getBasketThunk.pending, (state) => {
                state.loading = true
            })

            .addCase(getBasketThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })


            


            .addCase(postBasketThunk.fulfilled, (state,action) => {
                state.loading =false

            })

            .addCase(postBasketThunk.pending, (state) => {
                state.loading= true
            })

            .addCase(postBasketThunk.rejected, (state,action) => {
                state.loading=false
                state.error= action.error.message
            })


            .addCase(updateBasketThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.basket = state.basket.map((item) =>
                    item._id === action.payload._id ? { ...item, quantity: action.payload.quantity } : item
                );
            })
    

            .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.basket = state.basket.filter(item => item._id !== action.payload)
            })

            .addCase(deleteBasketThunk.pending, (state) => {
                state.loading = true
            })

            .addCase(deleteBasketThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            
    }
})


export default basketSlice.reducer