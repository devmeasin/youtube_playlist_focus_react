import { configureStore } from '@reduxjs/toolkit';
import playlistItemSlice from './playlistItemSlice';
import favoriteItemSlice from './favoriteItemSlice';
import recentItemSlice from './recentItemSlice';


export const store = configureStore({
  reducer: {
    playlist_items : playlistItemSlice,
    favorite_items : favoriteItemSlice,
    recent_playlist_items : recentItemSlice,
  },
})