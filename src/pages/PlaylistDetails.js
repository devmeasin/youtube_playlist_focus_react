import React from 'react';
import { useParams } from 'react-router-dom';
import RootLayoutWrapper from './RootLayoutWrapper';
import PlaylistItemDetail from '../components/PlaylistItemDetail';

const PlaylistDetails = () => {

    const { id } = useParams();

    return (
        <RootLayoutWrapper>
            <div>
                <PlaylistItemDetail/>
            </div>
        </RootLayoutWrapper>
    )
}

export default PlaylistDetails;
