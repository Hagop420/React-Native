import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {db} from '../../firebase.config'
import {collection, getDocs} from 'firebase/firestore'
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const querySnap = await getDocs(collection(db,'partners'))
        const partners = []
        querySnap.forEach((doc) => {
            partners.push(doc.data())
        });
        return partners
    }
);

const partnersSlice = createSlice({
    name: 'partners',
    initialState: { isLoading: true, errMess: null, partnersArray: [] },
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.partnersArray = mapImageURL(action.payload);
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const partnersReducer = partnersSlice.reducer;
