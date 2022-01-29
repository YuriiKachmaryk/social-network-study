import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*"
              element={<DialogsContainer />} />

            <Route path="/profile"
              element={<Profile />} />
              
            <Route path="/news"
              element={<News />} />

            <Route path="/music"
              element={<Music />} />

            <Route path="/settings"
              element={<Settings />} />
              
            <Route path="/friends"
              element={<Friends />} />
          </Routes>
        </div>
      </div>
    );
}

// updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}


export default App;
