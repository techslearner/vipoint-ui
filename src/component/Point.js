import React from 'react';
import User from './User';

const Users = [
    {id:1, point: 1, stocked: true, name: 'Veer Shah'},
    {id:2, point: 2, stocked: true, name: 'Ishah Shah'},
    {id:3, point: 3, stocked: false, name: 'Hemal Shah'},
    {id:4, point: 4, stocked: true, name: 'Nili Shah'}
  ];

class Point extends React.Component {

    componentDidMount(){
      //console.log("Point - componentDidMount called....");
    }
  
    renderUser(){
        const rows = [];  
        let users = Users;  
        users.forEach((userElement) => {
            rows.push(
              <User user={userElement} valueAttr={1} key={userElement.id}></User>
            );
        });
        return (<>{rows}</>);
    }
  
    render(){
      return (
        <div>{this.renderUser()}</div>
      );
    }
  }

  export default Point;