import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/profile' element={<ProfileContainer />} />
                        <Route path='/users' element={<UserContainer />} />
                    </Routes>
            </div>
        </div>
    );
}


export default App;
