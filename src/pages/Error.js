import React from 'react';
import RootLayoutWrapper from './RootLayoutWrapper';
import NoData from '../components/NoData';
import Error404 from '../static/404.json'

const Error = () => {
    return (
        <RootLayoutWrapper>
            <div>
                <NoData title="Not Found! 404!" animation_data={Error404} />
            </div>
        </RootLayoutWrapper>
    )
}

export default Error
