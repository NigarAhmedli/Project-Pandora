import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// User login
export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/users/login', userData, {
      withCredentials: true, // Cookie göndərmək üçün
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// User register
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    console.log("İstifadəçi göndərilir:", userData); 
    const { data } = await axios.post('http://localhost:5000/api/users/signup', userData, {
      withCredentials: true, // Cookie göndərmək üçün
    });
    return data;
  } catch (error) {
     console.log("Serverdən error:", error.response?.data || error.message);
     console.log("İstifadəçi göndərilir:", userData);  // email burada doğru görünür?

    return rejectWithValue(error.response.data);
  }
});

// Logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await axios.post('http://localhost:5000/api/users/logout', {}, {
      withCredentials: true, // Cookie-ləri silmək üçün
    });
    return null;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Get User info
export const getUser = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/users/getuser', {
      withCredentials: true, // Cookie istifadə olunur
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,  // Refresh zamanı localStorage-dən götür
    loading: false,
    error: null,
  },
  reducers: {
    loadUserFromStorage: (state) => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        localStorage.removeItem('user'); // Logout zamanı localStorage sil
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get User
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload)); 
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;