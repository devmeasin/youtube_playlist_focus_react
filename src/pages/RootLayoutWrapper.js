import React, { useEffect } from 'react';
import {NextUIProvider } from "@nextui-org/react";

import Layout from '../components/Layout';


const Root = ({children}) => {
    return (
        <div>
            <NextUIProvider>
                <Layout> { children } </Layout>
            </NextUIProvider>
        </div>
    )
}

export default Root;
