import React from 'react';
import './App.scss';
import SideBar from './components/side-bar';
import MainPanel from './components/main-panel';

function App() {
  return (
    <div className="App-container">
      <SideBar />
      <MainPanel />
    </div>
  );
}

export default App;
