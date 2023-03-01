import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useReducer  from 'react';
import { baseUrl } from '../../shared/baseUrl';
import { COMMENTS } from '../../shared/comments';


export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

// new thunk creator
export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        const response = await fetch(baseUrl + 'comments');

        setTimeout(() => {
            const { comments } = getState();
            const newComment = {
                ...payload,
                date: new Date().toISOString(),
                id: comments.commentsArray.length,
            };
            dispatch(addComment(newComment));
        }, 2000);
        
    }
);
// end new thunk

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {
        addComment: (state, action) => {
            state.commentsArray.push(action.payload);
        },
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});


export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;