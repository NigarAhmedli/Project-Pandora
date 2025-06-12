import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFormikThunk } from './productSlice';

export const getRingsThunk = createAsyncThunk('get/rings', async () => {
  const response = await axios.get('http://localhost:5000/rings');
  return response.data;
});

export const deleteRingsThunk = createAsyncThunk('rings/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/rings/${id}`);
  return id;
});

export const postRingsThunk = createAsyncThunk('post/rings', async (data) => {
  const response = await axios.post('http://localhost:5000/rings', data);
  return data;
});

export const ringsSlice = createSlice({
  name: 'rings',
  initialState: {
    rings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRingsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.rings = action.payload;
      })
      .addCase(getRingsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postRingsThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postRingsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteRingsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.rings = state.rings.filter(item => item._id !== action.payload);
      })
      .addCase(deleteRingsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteRingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(addFormikThunk.fulfilled, (state, action) => {
        if (action.meta.arg.category === "rings") {
          state.rings.push(action.payload);
        }
      });
  }
});

export default ringsSlice.reducer;
