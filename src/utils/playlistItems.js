export const playlistItems = (playlist_items= []) => {

    const playlist_items_array = playlist_items.map((item) => {

        const { title, description, thumbnails: { maxres : {url} }, resourceId: {videoId}} = item.snippet;
        let titlex = title.substring(0,49) + "...";
        return {
			title : titlex,
			description,
			thumbnail: url,
			contentDetails: item?.contentDetails,
            videoId
		};

    });

    return playlist_items_array;

}