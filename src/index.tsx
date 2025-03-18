import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)