import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {mapImageURL} from '../../utils/mapImageURL'
import {db} from '../../firebase.config'
import {collection, getDocs} from 'firebase/firestore'




export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const querySnap = await getDocs(collection(db,'campsites'))
        const campsites = []
        querySnap.forEach((doc) => {
            campsites.push(doc.data())
        });
        return campsites
    }
);

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState: { isLoading: true, errMess: null, campsitesArray: [] },
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const campsitesReducer = campsitesSlice.reducer;
