import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );



