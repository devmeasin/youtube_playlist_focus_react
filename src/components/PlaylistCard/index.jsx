import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Card, Text , Grid } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { RiHeart3Fill , RiHeart3Line , RiPlayCircleLine } from "react-icons/ri";
import { addFavorite , removeFavorite } from '../../store/favoriteItemSlice';
import './playlistcard.css';


const PlaylistCard = ({play_list_item}) => {

    const favorite_items = useSelector((state) => state.favorite_items.favorite_list);
    const dispatch = useDispatch();
    
    // add to favorite
    const addToFavoriteItem = (event , data) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addFavorite(data));
    }

    // remove Favorite
    const removeFavoriteItem = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(removeFavorite(id));
    }

    return (
        <Link to={`/playlist/${play_list_item.id}`}>
            <Card isPressable>
                <Card.Body css={{ p: 0 }} className="card_body_yt">
                    <Card.Image
                        src={play_list_item?.thumbnails}
                        showSkeleton
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={play_list_item?.playlistTitle}
                    />
                    <RiPlayCircleLine className="custom_play_icon favorite-icon_color"/>
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Grid.Container gap={1} justify="center">
                        <Grid xs={10} className="favorite-title">
                              <Text b size={14}>{play_list_item?.playlistTitle}</Text>
                        </Grid>
                        <Grid xs={2} >
                             <div className="favorite-icon">
                                 <button onClick={(event) => {
                                    if(favorite_items[play_list_item.id]) {
                                        removeFavoriteItem(event, play_list_item?.id);
                                    } else {
                                        addToFavoriteItem(event, play_list_item);
                                    }
                                 }}> 
                                     {
                                        favorite_items[play_list_item.id] ?
                                        <RiHeart3Fill className="custom_react_icon favorite-icon_color"/> : 
                                        <RiHeart3Line className="custom_react_icon favorite-icon_color"/>
                                     } 
                                 </button>
                              </div>
                        </Grid>
                    </Grid.Container>
                </Card.Footer>
            </Card>
        </Link>
    )
}

export default PlaylistCard
