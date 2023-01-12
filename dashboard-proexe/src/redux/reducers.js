import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './actions';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
    deleteUser(state, action) {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
    getUser(state, action) {
      state.data = state.data.find(({ id }) => id === action.payload);
    },
    editUser(state, action) {
      state.data = state.data.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export const { addUser, deleteUser, editUser } = usersDataSlice.actions;
export default usersDataSlice.reducer;
