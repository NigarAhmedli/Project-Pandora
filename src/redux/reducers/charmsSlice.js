import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFormikThunk } from './productSlice';

export const getCharmsThunk = createAsyncThunk('get/charms', async () => {
  const response = await axios.get('http://localhost:5000/charms');
  return response.data;
});

export const deleteCharmsThunk = createAsyncThunk('charms/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/charms/${id}`);
  return id;
});

export const postCharmsThunk = createAsyncThunk('post/charms', async (data) => {
  const response = await axios.post('http://localhost:5000/charms', data);
  return data;
});

export const charmsSlice = createSlice({
  name: 'charms',
  initialState: {
    charms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCharmsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.charms = action.payload;
      })
      .addCase(getCharmsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharmsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postCharmsThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postCharmsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCharmsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteCharmsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.charms = state.charms.filter(item => item._id !== action.payload);
      })
      .addCase(deleteCharmsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCharmsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ✅ Əsas buradır – charms-a Formik ilə əlavə
      .addCase(addFormikThunk.fulfilled, (state, action) => {
        if (action.meta.arg.category === "charms") {
          state.charms.push(action.payload);
        }
      });
  }
});

export default charmsSlice.reducer;
