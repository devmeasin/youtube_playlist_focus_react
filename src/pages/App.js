import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "../routes";

const App = () => {

    return (
        <Router>
            <Routes>
                {
                    router.map((route) => {
                       return <Route path={route.path} element={<route.component />} />
                    })
                }
            </Routes>
        </Router>
    )
}

export default App;