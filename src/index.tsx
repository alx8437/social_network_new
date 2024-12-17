import './index.css';
import store , { TState } from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: TState) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store._state);