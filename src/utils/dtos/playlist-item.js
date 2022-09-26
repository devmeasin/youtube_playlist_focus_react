export class PlaylistItem {

    id;
    channelId;
    channelTitle;
    title;
	description;
    thumbnails;

    constructor(playlist_item , playlistId) {

        let title = playlist_item?.title.substring(0,49) + '...';

        this.id = playlistId;
        this.channelId = playlist_item?.channelId;
        this.channelTitle = playlist_item?.channelTitle;
        this.playlistTitle = title;
        this.playlistDescription = playlist_item?.description;
        this.thumbnails = playlist_item?.thumbnails?.maxres?.url;

    }

}

