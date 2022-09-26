import React from 'react';
import RootLayoutWrapper from './RootLayoutWrapper';
import PlaylistGrid from '../components/PlaylistGrid';
import { useSelector } from 'react-redux';
import NoData from '../components/NoData';

const Favorite = () => {

    const favorite_items = useSelector((state) => state.favorite_items.favorite_list);
    const favoriteItem_Array = Object.values(favorite_items);

    return (
        <RootLayoutWrapper>
            <div>
            {
                favoriteItem_Array.length > 0 ? <PlaylistGrid  playlist_items={favoriteItem_Array}/> :
                <NoData title="No Favorite Playlist Found! "/>
            }
                 
            </div>
        </RootLayoutWrapper>
    )
}

export default Favorite;
