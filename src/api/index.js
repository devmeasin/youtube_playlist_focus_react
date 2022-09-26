import axios from "axios";
import {PlaylistItem} from '../utils/dtos/playlist-item';
import {playlistItems} from '../utils/playlistItems'

const key = process.env.REACT_APP_YOUTUBE_KEY;

const youtube = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key
    },
    headers:{}
});

export const getPlaylistItem = async (playlistId , nextPageToken= '' , results=[] ) => {

    let { data } = await youtube.get(`playlistItems?playlistId=${playlistId}&pageToken=${nextPageToken}`);

    results = [...results , ...data?.items]

    if (data.nextPageToken) {
		results = getPlaylistItem(playlistId, data.nextPageToken, results);
	}

    return results;

};

export const getPlaylist = async (playlistId) => {
    const {data} = await youtube.get(`playlists?id=${playlistId}`);

    let dtos_PlaylistData =  new PlaylistItem(data?.items[0]?.snippet , data?.items[0]?.id);
    let playlist_item = await getPlaylistItem(playlistId);
    let dtos_PlaylistItem = playlistItems(playlist_item);

    return {  
        ...dtos_PlaylistData , playlistItem: dtos_PlaylistItem
    };
}
