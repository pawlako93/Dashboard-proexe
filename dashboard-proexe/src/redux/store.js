import { configureStore } from '@reduxjs/toolkit';
import fetchUsersDataReducer from './reducers';

export default configureStore({
  reducer: {
    usersData: fetchUsersDataReducer,
  },
});
