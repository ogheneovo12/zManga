import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./_reducers"

export const store = configureStore({
      reducer:rootReducer
});
