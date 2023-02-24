import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../nucampsite/features/campsites/campsitesSlice';
import { commentsReducer } from '../nucampsite/features/campsites/comments/commentsSlice';
import { partnersReducer } from '../nucampsite/features/partners/partnersSlice';
import { promotionsReducer } from '../nucampsite/features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }
});