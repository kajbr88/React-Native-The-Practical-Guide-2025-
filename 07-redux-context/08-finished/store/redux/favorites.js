import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorite(state, action) {
            state.ids.push(action.payload.id);// action here is a key created and provided by redux.
        },

        removeFavorite(state, action) {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);// splice is a built-in method to remove an item from an array
        }//to splice as a second argument. We provide the number of items that we wanna remove in this case and we only wanna remove that one item which has this ID, passed through payload.
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;