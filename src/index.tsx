import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

export type TDialog = {
    id: string;
    name: string
}

export type TMessage = {
    id: string;
    message:string
}

export type TPost = {
    id: string
    message: string
    likesCount: number
}

const dialogsData: Array<TDialog> = [
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Sergey'},
    {id: v1(), name: 'Nikita'},
    {id: v1(), name: 'Andrey'},
]

const messagesData: Array<TMessage> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'I\'m fine!'},
]

const postsData: Array<TPost> = [
    {id: v1(), message: 'Hi! How are you?', likesCount: 15},
    {id: v1(), message: 'This is my first post', likesCount: 20}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
