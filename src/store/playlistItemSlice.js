import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { getPlaylist } from '../api';
import { STATUS } from '../utils/config/status';
import {setItemsStorage , getItemsStorage} from '../utils/Storage';

const items = getItemsStorage('play_list_item');

const initialState = {
  play_list_item: {...items},
  status: STATUS.IDLE,
};

export const getPlaylistData = createAsyncThunk('playlist/item', async (playlist_id) => {
  const data = await getPlaylist(playlist_id);
  return data;
})

export const playlistItemSlice = createSlice({
  name: 'playlist_items',
  initialState,
  reducers: {
    addPlaylist: (state, actions) => {
      const data = actions.payload;
      state.play_list_item[data.id] = data;
      setItemsStorage('play_list_item' ,  state.play_list_item);
    },
    
    changeStatus: (state, actions) => {
      const data = actions.payload;
      state.status = data;
    }
  }

});

// Action creators are generated for each case reducer function
export const { addPlaylist , changeStatus } = playlistItemSlice.actions;

export default playlistItemSlice.reducer;


// extraReducers: (builder) => {

//   builder
//     .addCase(getPlaylistData.pending, (state, action) => {
//         state.status = STATUS.LOADING;
//     })
//     .addCase(getPlaylistData.fulfilled, (state, action) => {
//         const data = action.payload;
//         state.play_list_item[data.id] = data;
//         state.status = STATUS.COMPLETE;
//     })
//     .addCase(getPlaylistData.rejected, (state, action) => {
//         state.status = STATUS.ERORR;
//     })
// }