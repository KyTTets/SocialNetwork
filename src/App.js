import React from 'react';
// eslint-disable-next-line
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Friends/UsersPage/UsersContainer';

function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile'
          render={() => <Profile />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <MusicContainer />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/friends' render={() => <UsersContainer />} />
      </div>

    </div>

  )
}

export default App;
