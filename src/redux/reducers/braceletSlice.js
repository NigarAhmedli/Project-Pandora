import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFormikThunk } from './productSlice';

export const getBraceletThunk = createAsyncThunk('get/bracelet', async () => {
  const response = await axios.get('http://localhost:5000/bracelet');
  return response.data;
});

export const deleteBraceletThunk = createAsyncThunk('bracelet/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/bracelet/${id}`);
  return id;
});

export const postBraceletThunk = createAsyncThunk('post/bracelet', async (data) => {
  const response = await axios.post('http://localhost:5000/bracelet', data);
  return response.data; 
});


export const braceletSlice = createSlice({
  name: 'bracelet',
  initialState: {
    bracelet: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getBraceletThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bracelet = action.payload;
      })
      .addCase(getBraceletThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBraceletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

     .addCase(postBraceletThunk.fulfilled, (state, action) => {
  state.loading = false;
  state.bracelet.push(action.payload); // <-- əlavə edildi
})

      .addCase(postBraceletThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postBraceletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteBraceletThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bracelet = state.bracelet.filter(item => item._id !== action.payload);
      })
      .addCase(deleteBraceletThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBraceletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(addFormikThunk.fulfilled, (state, action) => {
        if (action.meta.arg.category === "bracelet") {
          state.bracelet.push(action.payload);
        }
      });
  }
});

export default braceletSlice.reducer;
