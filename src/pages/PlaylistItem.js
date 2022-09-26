import React from 'react';
import RootLayoutWrapper from './RootLayoutWrapper';
import { useSelector } from 'react-redux';
import ModalX from '../components/ModalX';
import PlaylistGrid from '../components/PlaylistGrid';
import NoData from '../components/NoData';

const PlaylistItem = () => {
    
    const playlist_items = useSelector((state) => state.playlist_items.play_list_item);

    const playlist_items_Array = Object.values(playlist_items);

    return (
        <RootLayoutWrapper>
            {
                playlist_items_Array.length > 0 ? <PlaylistGrid  playlist_items={playlist_items_Array}/> :
                <NoData title="No Playlist Found! "/>
            }
            <ModalX />
        </RootLayoutWrapper>
    )
}

export default PlaylistItem;
