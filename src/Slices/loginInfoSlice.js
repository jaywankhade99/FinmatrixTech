import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../Components/APIs/loginApi';

// Async thunk for login
export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
  console.log(email, password)
  const response = await login(email, password);
  console.log(response)
  return response;
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    
    //isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    isAuthenticated: false,
    // user: JSON.parse(localStorage.getItem('user')) || null,
    user: null,
     token: null, 
     refreshToken:null,
     status: 'idle', 
     error: null ,
     expiresIn: null,
     isAdmin:false
    },
  reducers: {
    setUserAndToken: (state, action) => {
      const { user, token, refreshToken, expiresIn } = action.payload;
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
      state.expiresIn = expiresIn;
      state.isAdmin = user.type === 'admin';
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.expiresIn = null;
      state.isAuthenticated = false;
      //localStorage.setItem('isAuthenticated', 'false');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated=true;
        state.expiresIn= new Date().getTime()+36000*1000;
        state.isAdmin = action.payload.user.type === 'admin';
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { setUserAndToken, logout} = authSlice.actions;