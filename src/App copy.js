import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Hello World.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Main Header
          </p>
        </header>
        <div className="users">
          <Point></Point>
        </div>
      </div>
    );
  }
}

class Point extends React.Component {

  render(){
    return (
      <div className="App">
        <User></User>
        <hr></hr>
        <User></User>
      </div>
    );
  }
}

class User extends React.Component {

  render(){
    return (
      <div className="User">
          <p>
            Name - Veer Shah
          </p>
          <p>
            Points - 10
          </p>
          <button>+1</button>
          <button>-1</button>
      </div>
    );
  }
}



export default App;
