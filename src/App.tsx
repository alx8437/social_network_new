import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {ActionTypes, TState} from "./redux/state";

type TAppPropsType = {
    state: TState
    dispatch: (action: ActionTypes) => void
}

const App:FC<TAppPropsType> = ({state, dispatch}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile dispatch={dispatch} state={state.profilePage}/>} />
                        <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />} />
                        <Route path='/profile' element={<Profile dispatch={dispatch} state={state.profilePage}/>} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
