import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/users/login',
        userData,
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Giriş zamanı xəta baş verdi'
      );
    }
  }
);

// Register
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/users/signup', userData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Qeydiyyatda xəta baş verdi");
  }
});

// Logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await axios.post('http://localhost:5000/api/users/logout', {}, {
      withCredentials: true,
    });
    return null;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Get current user
export const getUser = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/users/getuser', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update profile
export const updateUser = createAsyncThunk('auth/updateUser', async (updatedData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/users/update', updatedData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Xəta baş verdi');
  }
});

// Admin: Get all users
export const getAllUsers = createAsyncThunk('auth/getAllUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/users/all', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'İstifadəçilər alınmadı');
  }
});

// Admin: Change user role
export const updateUserRole = createAsyncThunk(
  'auth/updateUserRole',
  async ({ id, role }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:5000/api/users/role',
        { id, role }, // ✅ backend-in istədiyi adlarla
        { withCredentials: true }
      );
      return { _id: id, role: data.user.role }; // cavabda `user` içindən alırıq
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Rol dəyişdirilə bilmədi');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadUserFromStorage: (state) => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
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
        state.user = {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone || "",
          avatar: action.payload.avatar || "",
          role: action.payload.role || "",
        };
        localStorage.setItem('user', JSON.stringify(state.user));
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
  state.user = {
    _id: action.payload._id,
    name: action.payload.name,
    email: action.payload.email,
    phone: action.payload.phone || "",
    avatar: action.payload.avatar || "",
    role: action.payload.role || "user",
  };
  localStorage.setItem('user', JSON.stringify(state.user));
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
        localStorage.removeItem('user');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get current user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone || "",
          avatar: action.payload.avatar || "",
          role: action.payload.role || "",
        };
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Edit profile
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone || "",
          avatar: action.payload.avatar || "",
        };
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin: Get all users
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin: Update user role
      .addCase(updateUserRole.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user._id === action.payload._id);
        if (index !== -1) {
          state.users[index].role = action.payload.role;
        }
      });
  },
});

export const { loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
