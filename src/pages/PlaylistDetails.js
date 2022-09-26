import React from 'react';
import { useParams } from 'react-router-dom';
import RootLayoutWrapper from './RootLayoutWrapper';

const PlaylistDetails = () => {

    const { id } = useParams();

    return (
        <RootLayoutWrapper>
            <div>
                <h1>Hello {id}</h1>
            </div>
        </RootLayoutWrapper>
    )
}

export default PlaylistDetails;
