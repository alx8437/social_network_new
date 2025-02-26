import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)