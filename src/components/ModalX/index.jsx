import React, { useState } from 'react';
import { Modal, Input, Loading, Button, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getPlaylist } from '../../api'
import { changeStatus, addPlaylist } from '../../store/playlistItemSlice';
import { STATUS } from '../../utils/config/status';

const ModelX = ({ visible, closeHandler }) => {

    const [playlist_id, setPlaylistId] = useState('');
    const status = useSelector((state) => state.playlist_items.status);
    const dispatch = useDispatch();

    const notify = (func, text) => {

        const options = {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        }
       return func === 'error' ? toast.error(text, options) : toast.success(text, options, );

    };

    const getPlaylistItem = async () => {

        if (playlist_id) {
               dispatch(changeStatus(STATUS.LOADING));
            try {
                const data = await getPlaylist(playlist_id);
                if (data) {
                    dispatch(addPlaylist(data));
                    setPlaylistId('');
                    closeHandler();
                    dispatch(changeStatus(STATUS.IDLE));
                    notify('success', 'Successfully Add Playlist Item');
                }
            } catch (error) {
                dispatch(changeStatus(STATUS.ERORR));
                notify('error', 'Invalid Playlist ID');
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