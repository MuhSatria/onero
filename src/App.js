import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import AppContentName from './components/AppContentName';
import AppRooms from './components/AppRooms';
import AppContentTiga from './components/AppContentTiga';
import AppDining from './components/AppDining';
import AppMeeting from './components/AppMeeting';
import AppNews from './components/AppNews';
import AppFooter from './components/AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppContentName/>
        <AppRooms/>
        <AppContentTiga/>
        <AppDining/>
        <AppMeeting/>
        <AppNews/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
