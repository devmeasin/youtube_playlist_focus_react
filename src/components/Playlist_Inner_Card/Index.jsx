import React from 'react';
import { Card, Grid, Text } from "@nextui-org/react";
import './playlist_inner_card.css';

const Playlist_Inner_Card = ({ itemIndex, channelTitle, playlist_Item, singleItem, setSingleItem, setItemIndex }) => {

    const setItemHandler = () => {
        setSingleItem(playlist_Item);
        setItemIndex(itemIndex);
    }

    return (

        <div className="playlist_inner_wrapper" onClick={setItemHandler}>
            <Card css={{ w: "100%", marginBottom: "5px" }} className={singleItem.videoId === playlist_Item?.videoId ? 'playlistItem_activeColorBG' : ''} >
                <Card.Body
                    css={{
                        overflow: 'hidden',
                        padding: "0px",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        zIndex: 1,
                    }}
                >

                    <Grid.Container gap={1} justify="center">
                        <Grid xs={4}>
                            <div className='yt_image_text_wrapper'>

                                <img
                                    src={playlist_Item?.thumbnail}
                                    alt="Breathing app icon"
                                />
                            </div>
                        </Grid>
                        <Grid xs={8}>
                            <div className="playlist_inner_content">
                                <Text h5 size={14}>
                                    {
                                        playlist_Item?.title.substr(0, 50)
                                    }
                                </Text>
                                <Text h5 size={14}>
                                    {
                                        channelTitle && channelTitle
                                    }
                                </Text>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Playlist_Inner_Card;