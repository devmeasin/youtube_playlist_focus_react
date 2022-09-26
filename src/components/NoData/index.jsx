import React from 'react';
import Lottie from 'lottie-react';
import './nodata.css';
import nodata from '../../static/nodata.json'


const NoData = ({ title = "" }) => {

    const options = {
        loop: true,
        autoplay: true,
        animationData: nodata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='nodata_wrapper'>
            <div className="nodata_inner">
                <Lottie
                    
                    animationData={nodata} loop={true}
                />
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default NoData;
