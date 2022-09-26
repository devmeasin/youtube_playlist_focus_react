import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PlaylistItem from './PlaylistItem';
import Favorite from './Favorite';
import Recent from './Recent';
import PlaylistDetails from './PlaylistDetails';
import Error from './Error';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlaylistItem />}/>
                <Route path="/recent" element={<Recent />}/>
                <Route path="/favorite" element={<Favorite />}/>
                <Route path="/playlist/:id" element={<PlaylistDetails />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
    )
}

export default App;