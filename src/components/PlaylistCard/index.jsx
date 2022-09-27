import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Text, Grid } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { RiHeart3Fill, RiHeart3Line, RiPlayCircleLine, RiCloseFill } from "react-icons/ri";
import { removePlaylist } from '../../store/playlistItemSlice';
import { addFavorite, removeFavorite } from '../../store/favoriteItemSlice';
import { recentItemToggle , recentItemRemove } from '../../store/recentItemSlice.js';
import './playlistcard.css';


const PlaylistCard = ({ play_list_item }) => {

    const favorite_items = useSelector((state) => state.favorite_items.favorite_list);
    const recent_items = useSelector((state) => state.recent_playlist_items.recent_playlists);
    const dispatch = useDispatch();

    // add to favorite
    const addToFavoriteItem = (event, data) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addFavorite(data));
    };

    // remove Favorite
    const removeFavoriteItem = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(removeFavorite(id));
    };

    // remove Favorite
    const removePlaylistItem = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(removePlaylist(id));
        removeFavoriteItem(event, id);
        removeRecentItem(id);
    };

    const addRecentItem = () => {
        let hasRecent = false;
        recent_items.map((item) => {
            if (item === play_list_item.id) {
                hasRecent = true
            }
        });
        if (hasRecent == false) {
            dispatch(recentItemToggle(play_list_item));
        }
    };

    const removeRecentItem = (id) => {
        const filterData = recent_items.filter(item => item !== id);
        console.log('filter data',filterData)
        dispatch(recentItemRemove(filterData));
    }


    return (
        <Link to={`/playlist/watch/${play_list_item.id}`}>
            <Card isPressable onClick={addRecentItem} className="card_wrapper_yt">
                <Card.Body css={{ p: 0 }} className="card_body_yt">
                    <Card.Image
                        src={play_list_item?.thumbnails}
                        showSkeleton
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={play_list_item?.playlistTitle}
                    />
                    <div className="custom_delete_icon_wrapper"
                        onClick={(event) => removePlaylistItem(event, play_list_item?.id)}>
                        <div className="custom_delete_icon">
                            <RiCloseFill className="delete_icon" />
                        </div>
                    </div>

                    <RiPlayCircleLine className="custom_play_icon" />

                    <div className="card_body_overly"></div>

                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Grid.Container gap={1} justify="center">
                        <Grid xs={10} className="favorite-title">
                            <Text b size={14}>{play_list_item?.playlistTitle}</Text>
                        </Grid>
                        <Grid xs={2} >
                            <div className="favorite-icon">
                                <button onClick={(event) => {
                                    if (favorite_items[play_list_item.id]) {
                                        removeFavoriteItem(event, play_list_item?.id);
                                    } else {
                                        addToFavoriteItem(event, play_list_item);
                                    }
                                }}>
                                    {
                                        favorite_items[play_list_item.id] ?
                                            <RiHeart3Fill className="custom_react_icon favorite-icon_color" /> :
                                            <RiHeart3Line className="custom_react_icon favorite-icon_color" />
                                    }
                                </button>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Card.Footer>
            </Card>
        </Link >
    )
}

export default PlaylistCard
