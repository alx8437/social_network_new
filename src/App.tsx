import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {TDialogsPage, TProfilePage} from "./redux/store";
import {CombinedState, Store} from "redux";
import {ActionTypes} from "./redux/actionsCreators";

type TAppPropsType = {
    store: Store<CombinedState<{ profilePage: TProfilePage; dialogsPage: TDialogsPage; }>, ActionTypes>
    dispatch: (action: ActionTypes) => void
}

const App:FC<TAppPropsType> = ({store, dispatch}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile dispatch={dispatch} state={store.getState().profilePage}/>} />
                        <Route path='/dialogs/*' element={<Dialogs state={store.getState().dialogsPage} dispatch={dispatch} />} />
                        <Route path='/profile' element={<Profile dispatch={dispatch} state={store.getState().profilePage}/>} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
