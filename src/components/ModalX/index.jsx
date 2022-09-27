import React, { useState } from 'react';
import { Modal, Input, Loading, Button, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { notifyDefault, notifySuccess, notifyError } from '../../utils/toast';
import { getPlaylist } from '../../api'
import { changeStatus, addPlaylist } from '../../store/playlistItemSlice';
import { STATUS } from '../../utils/config/status';

const ModelX = ({ visible, closeHandler }) => {

    const [playlist_id, setPlaylistId] = useState('');
    const play_list_item = useSelector((state) => state.playlist_items.play_list_item);
    const status = useSelector((state) => state.playlist_items.status);
    const dispatch = useDispatch();


    const getPlaylistItem = async () => {

        const playlistID = playlist_id.split('=')[1] || playlist_id;

        if (playlistID) {

            dispatch(changeStatus(STATUS.LOADING));

            if (play_list_item[playlistID]) {
                notifyDefault('Playlist Item Already Added! 😎');
                setPlaylistId('');
                setTimeout(() => {
                    dispatch(changeStatus(STATUS.IDLE));
                }, 2000)
                return;
            }

            try {
                const data = await getPlaylist(playlistID);
                if (data) {
                    dispatch(addPlaylist(data));
                    setPlaylistId('');
                    closeHandler();
                    dispatch(changeStatus(STATUS.IDLE));
                    notifySuccess('Successfully Add Playlist Item');
                    console.log(process.env.REACT_APP_YOUTUBE_KEY);
                }
            } catch (error) {
                dispatch(changeStatus(STATUS.ERORR));
                notifyError(error.message);
            }
        }
    };


    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}>
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Please Enter -- &nbsp;
                        <Text b="b" size={18}>
                            Playlist ID
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth="fullWidth"
                        color="primary"
                        size="lg"
                        placeholder="Please Enter --> Playlist ID"
                        value={playlist_id}
                        onChange={(event) => setPlaylistId(event.target.value)}
                    />

                    <Button auto shadow color="success" onPress={getPlaylistItem} disabled={status === STATUS.LOADING}>
                        {
                            status === STATUS.LOADING ? <Loading /> : 'Add Playlist'
                        }
                    </Button>
                </Modal.Body>
            </Modal>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </div>
    )
}

export default ModelX;



// if (playlist_id) {
//     if (!playlist_items[playlist_id]) {
//         dispatch(getPlaylistData(playlist_id));
//         closeHandler();
//         setPlaylistId('');
//     }
// }