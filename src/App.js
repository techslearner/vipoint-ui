import React from 'react';
import './App.css';

const Users = [
    {id:1, point: 1, stocked: true, name: 'Veer Shah'},
    {id:2, point: 2, stocked: true, name: 'Ishah Shah'},
    {id:3, point: 3, stocked: false, name: 'Hemal Shah'},
    {id:4, point: 4, stocked: true, name: 'Nili Shah'}
  ];

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

  renderUser(){
      const rows = [];  
      let users = Users;  
      users.forEach((userElement) => {
          rows.push(
            <User user={userElement} valueAttr={1} key={userElement.id}></User>
          );
      });
      return (<div>{rows}</div>);
  }

  render(){
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = { point: 1,};
  }

  render(){
    return (
      <div className="User">
          <p>
            Name : {this.props.user.name}
          </p>
          <p>
            Points - {this.props.user.point}
          </p>
          <button onClick= {() => { 
            let newPoint = this.state.point + this.props.valueAttr;
              this.setState(
                {
                  point: newPoint,
                }
              );
             // alert('click'); 
              }
            }
          >
              +1
          </button>
          <button onClick= {() => { 
            
            console.log('array: ' + Users[0].name);
            let newPoint = this.state.point - this.props.valueAttr;
                this.setState({
                  point: newPoint,
                }
                );
              }
            }
          >
            -1
          </button>
          <hr/>
      </div>
    );
  }
}

export default App;
