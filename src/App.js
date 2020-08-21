import React from 'react';
import './App.css';
import Point from './component/Point';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
           Welcome to Points App
          </p>
        </header>
        <div className="users">
          <Point></Point>
        </div>
      </div>
    );
  }
}

export default App;
