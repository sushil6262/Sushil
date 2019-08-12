import React from 'react';
import AboutMe from './image/image.svg';
import ExperiencPage from './image/image2.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="profile" src={AboutMe} alt="React/React Native UI/UX Developer"/>
      <img className="profile" src={ExperiencPage} alt="React Developer"/>
    </div>
  );
}

export default App;
