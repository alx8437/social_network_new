import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import {TDialog, TMessage, TPost} from "./index";
import './App.css';

type TAppPropsType = {
    dialogsData: Array<TDialog>
    messagesData: Array<TMessage>
    postsData: Array<TPost>
}

const App:FC<TAppPropsType> = ({messagesData, dialogsData, postsData}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs messagesData={messagesData} dialogsData={dialogsData}/>} />
                        <Route path='/profile' element={<Profile postsData={postsData}/>} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
