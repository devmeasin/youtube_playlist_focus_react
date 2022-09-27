import { createSlice } from '@reduxjs/toolkit';
import { setItemsStorage, getItemsStorage } from '../utils/Storage';

const items = getItemsStorage('recent_playlist_items') || [];

const initialState = {
    recent_playlists: [...items],
}

export const recentItemSlice = createSlice({
    name: 'recent_playlist_items',
    initialState,
    reducers: {

        recentItemToggle: (state, actions) => {
            const data = actions.payload;
            state.recent_playlists.unshift(data.id);
            state.recent_playlists = state.recent_playlists.slice(0, 5);
            setItemsStorage('recent_playlist_items', state.recent_playlists);
        }
    },
});

// Action creators are generated for each case reducer function
export const { recentItemToggle } = recentItemSlice.actions;

export default recentItemSlice.reducer;