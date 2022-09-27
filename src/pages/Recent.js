import React from 'react';
import RootLayoutWrapper from './RootLayoutWrapper';
import { useSelector } from 'react-redux';
import PlaylistGrid from '../components/PlaylistGrid';
import NoData from '../components/NoData';

const Recent = () => {

    const playlist_items = useSelector((state) => state.playlist_items.play_list_item);
    const recent_playlists = useSelector((state) => state.recent_playlist_items.recent_playlists);
    const recentPlaylistData = recent_playlists.map((item) => playlist_items[item]);

    return (
        <RootLayoutWrapper>
            <div>
                {
                    recentPlaylistData.length > 0 ? <PlaylistGrid playlist_items={recentPlaylistData} /> :
                        <NoData title="No Recent Playlist Found! " />
                }
            </div>
        </RootLayoutWrapper>
    )
}

export default Recent;
