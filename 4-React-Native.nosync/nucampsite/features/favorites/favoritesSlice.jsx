import {createSlice} from '@reduxjs/toolkit'


const favoritesSlice = createSlice({
   name: 'favorites',
   initialState: [],
   reducers: {
      toggleFavorite: (favorites, action) => {
         if (favorites.includes(action.payload)) {
            return favorites.filter
               ((fav) => fav !== action.payload)
         } else {
            favorites.push(action.payload)
         }
      }

      
   }
})

export const {toggleFavorite} = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer