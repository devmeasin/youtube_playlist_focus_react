import { configureStore } from '@reduxjs/toolkit';
import playlistItemSlice from './playlistItemSlice';
import favoriteItemSlice from './favoriteItemSlice';


export const store = configureStore({
  reducer: {
    playlist_items : playlistItemSlice,
    favorite_items : favoriteItemSlice,
  },
})