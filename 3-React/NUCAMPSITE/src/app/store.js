import { configureStore } from '@reduxjs/toolkit';

// all store imports
import { campsiteSliceReducer } from '../features/campsites/campsitesSlice';
import { commentsSliceReducer } from '../features/campsites/components/Comments/commentsSlice';
import { partnerSliceReducer } from '../features/campsites/partners/partnersSlice';
import { promotionSliceReducer } from '../features/campsites/components/display/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsiteSliceReducer,
        comments: commentsSliceReducer,
        partnersObj:partnerSliceReducer,
        promotion: promotionSliceReducer

    }
});


