import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFormikThunk } from './productSlice';

export const getNecklacesThunk = createAsyncThunk('get/necklaces', async () => {
  const response = await axios.get('http://localhost:5000/necklaces');
  return response.data;
});

export const deleteNecklacesThunk = createAsyncThunk('necklaces/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/necklaces/${id}`);
  return id;
});

export const postNecklacesThunk = createAsyncThunk('post/necklaces', async (data) => {
  const response = await axios.post('http://localhost:5000/necklaces', data);
  return data;
});

export const necklacesSlice = createSlice({
  name: 'necklaces',
  initialState: {
    necklaces: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getNecklacesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.necklaces = action.payload;
      })
      .addCase(getNecklacesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNecklacesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postNecklacesThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postNecklacesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNecklacesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteNecklacesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.necklaces = state.necklaces.filter(item => item._id !== action.payload);
      })
      .addCase(deleteNecklacesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNecklacesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(addFormikThunk.fulfilled, (state, action) => {
        if (action.meta.arg.category === "necklaces") {
          state.necklaces.push(action.payload);
        }
      });
  }
});

export default necklacesSlice.reducer;
