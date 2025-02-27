import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {TDialogsPage, TProfilePage} from "./redux/store";
import {CombinedState, Store} from "redux";
import {ActionTypes} from "./redux/actionsCreators";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type TAppPropsType = {
    store: Store<CombinedState<{ profilePage: TProfilePage; dialogsPage: TDialogsPage; }>, ActionTypes>
}

const App:FC<TAppPropsType> = ({store}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile dispatch={store.dispatch} state={store.getState().profilePage}/>} />
                        <Route path='/dialogs/*' element={<DialogsContainer dialogsPage={store.getState().dialogsPage} dispatch={store.dispatch} />} />
                        <Route path='/profile' element={<Profile dispatch={store.dispatch} state={store.getState().profilePage}/>} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
