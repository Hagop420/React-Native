import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {db} from '../../firebase.config'
import {collection, getDocs} from 'firebase/firestore'
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () => {
        const querySnap = await getDocs(collection(db,'promotions'))
        const promotions = []
        querySnap.forEach((doc) => {
            promotions.push(doc.data())
        });
        return promotions
    }
);

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: { isLoading: true, errMess: null, promotionsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.promotionsArray = mapImageURL(action.payload);
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const promotionsReducer = promotionsSlice.reducer;
