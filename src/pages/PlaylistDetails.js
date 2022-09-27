import React from 'react';
import { useParams } from 'react-router-dom';
import RootLayoutWrapper from './RootLayoutWrapper';
import { useSelector } from 'react-redux';
import PlaylistItemDetail from '../components/PlaylistItemDetail';
import NoData from '../components/NoData';
import Error404 from '../static/404.json'

const PlaylistDetails = () => {

    const { id } = useParams();

    const playlistItems = useSelector((state) => state.playlist_items.play_list_item);
    const playlist_item = playlistItems[id];

    return (
        <RootLayoutWrapper>
            <div>
                {
                    playlist_item ?
                        <PlaylistItemDetail /> :
                        <NoData title="404 not Found! " animation_data={Error404}/>}
            </div>
        </RootLayoutWrapper>
    )
}

export default PlaylistDetails;
