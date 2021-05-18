import React from 'react';
import './App.css';
import Header from './components/Header';
import logo from './logo-color.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="get-started">
        <img src={logo} alt="logo" className="main-logo"/>
        <div className="main-text">
          <h2>ScheduleSync</h2>
          <p>A place for you and your friends to share your schedules on one calendar. Plan events, trips, and vacations with ease.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
