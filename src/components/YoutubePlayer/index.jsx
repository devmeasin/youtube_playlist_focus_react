import React, { useState } from 'react';
import { Loading, Text } from "@nextui-org/react";
import './youtubeplayer.css';

const YoutubePlayer = ({ videoID }) => {

    const [loading, setLoading] = useState(true);


    return (

        <div className='watchScreen__player__wrapper' style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
        }}>
            {
                loading === true ?
                    <div className="loading_yt_video">
                        <Loading color="primary" size="lg">
                            <Text h3 size={20} weight="bold"
                            >
                                Please Wait Video
                            </Text>
                        </Loading>
                    </div>
                    : null
            }

            <iframe
                onLoad={() => setLoading(false)}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                className="watchScreen__player"
                src={`https://www.youtube.com/embed/${videoID}`}
                frameBorder='0'
                allowFullScreen
                title="TEST VIDEO_ID"
            ></iframe>

        </div>
    )
}

export default YoutubePlayer;
