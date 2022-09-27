import React, { useState, useEffect } from 'react';
import { Grid, Card, Avatar } from "@nextui-org/react";
import YoutubePlayer from '../YoutubePlayer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Playlist_Inner_Card from '../Playlist_Inner_Card/Index';
import './playlist_item_detail.css';



const PlaylistItemDetail = () => {

    const { id: playlistID } = useParams();

    const playlistItems = useSelector((state) => state.playlist_items.play_list_item);
    const [singleItem, setSingleItem] = useState(playlistItems[playlistID]?.playlistItem[0]);
    const [itemIndex, setItemIndex] = useState(1);
    const playlist_Items = playlistItems[playlistID]?.playlistItem || [];
    const { playlistTitle, channelTitle } = playlistItems[playlistID];

    return (
        <div>
            <Grid.Container gap={1} justify="center">

                <Grid xs={12} sm={7} md={8}>
                    <div className="video_player_wrapper">
                        <YoutubePlayer videoID={singleItem?.videoId} />
                        <h4 color='#ffff'>{`${itemIndex} - ${singleItem?.title}`}</h4>
                        <div className="video_chanel_wrapper">
                            <Avatar
                                className='video_chanel_avatar'
                                text={channelTitle}
                                color="success"
                                textColor="white"
                                bordered
                            />
                            <h6>{channelTitle}</h6>
                        </div>
                    </div>
                </Grid>

                <Grid xs={12} sm={5} md={4}>
                    <Card css={{ $$cardColor: '#ffffff66' }}>
                        <Card.Header
                            className="playlist_item_header"
                            css={{
                                bgBlur: "#ffffff66",
                                zIndex: 1,
                            }}
                        >
                            <h5 color='#ffff'>{playlistTitle}</h5>
                            <h6>{`${channelTitle} - ${itemIndex}/${playlist_Items?.length}`}</h6>
                        </Card.Header>

                        <Card.Body css={{ backgroundColor: "#fff" }}>

                            <div className="playlist_item_detail_on_scroll">
                                {
                                    playlist_Items.map((item, index) => (
                                        <Playlist_Inner_Card key={index} itemIndex={index + 1} channelTitle={channelTitle} playlist_Item={item} singleItem={singleItem} setSingleItem={setSingleItem} setItemIndex={setItemIndex} />
                                    ))
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </div >
    )
}

export default PlaylistItemDetail;