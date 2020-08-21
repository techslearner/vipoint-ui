import React from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


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

  renderUser(i){
    return (
      <User valueAttr={i}></User>
    );
  }

  render(){
    return (
      <div className="App">
      {this.renderUser(1)}
      <hr></hr>
      {this.renderUser(2)}
      </div>
    );
  }
}

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      point: 1,
    };
  }

  render(){
    return (
      <div className="User">
          <p>
            Name - Veer Shah
          </p>
          <p>
            Points - {this.state.point}
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
      </div>
    );
  }
}

export default App;
