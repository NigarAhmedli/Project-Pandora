import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFormikThunk } from './productSlice';

export const getCollectionThunk = createAsyncThunk('get/collection', async () => {
  const response = await axios.get('http://localhost:5000/collection');
  return response.data;
});

export const deleteCollectionThunk = createAsyncThunk('collection/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/collection/${id}`);
  return id;
});

export const postCollectionThunk = createAsyncThunk('post/collection', async (data) => {
  const response = await axios.post('http://localhost:5000/collection', data);
  return data;
});

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collection: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCollectionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.collection = action.payload;
      })
      .addCase(getCollectionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCollectionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postCollectionThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postCollectionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCollectionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteCollectionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.collection = state.collection.filter(item => item._id !== action.payload);
      })
      .addCase(deleteCollectionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCollectionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(addFormikThunk.fulfilled, (state, action) => {
        if (action.meta.arg.category === "collection") {
          state.collection.push(action.payload);
        }
      });
  }
});

export default collectionSlice.reducer;
