import React from 'react';
import { Grid } from "@nextui-org/react";
import PlaylistCard from '../PlaylistCard';

const PlaylistGrid = ({ playlist_items }) => {
    
    return (
        <div>
            <Grid.Container gap={2} justify="flex-start">
                {
                    playlist_items && playlist_items.map((item, index) => (
                        <Grid xs={12} sm={4} md={3} key={index}>
                            <PlaylistCard play_list_item={item} />
                        </Grid>
                    ))
                }
            </Grid.Container>
        </div>
    )
}

export default PlaylistGrid;
