import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import IndexRoute from './router/index';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <IndexRoute/>
            </BrowserRouter>
        </div>
    );
}

export default App;
