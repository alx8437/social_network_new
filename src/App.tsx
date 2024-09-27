import React from 'react';
import './App.css';
import logo from './assets/images/logo.png'
import content from './assets/images/content.jpg'

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt="logo"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div><img src={content} alt="content"/></div>
                <div>ava + description</div>
                <div>My posts
                    <div>New post</div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
}




export default App;
