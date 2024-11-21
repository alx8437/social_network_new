import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {TState} from "./redux/state";

type TAppPropsType = {
    state: TState
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const App:FC<TAppPropsType> = ({state, addPost, updateNewPostText}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage}/>} />
                        <Route path='/profile' element={<Profile updateNewPostText={updateNewPostText} addPost={addPost} state={state.profilePage}/>} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
