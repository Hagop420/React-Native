import { configureStore } from '@reduxjs/toolkit';
import { campsiteSliceReducer } from '../features/campsites/campsitesSlice';
export const store = configureStore({
  reducer: {
    counter: campsiteSliceReducer,
  },
});
