import React from 'react';

class User extends React.Component {

    constructor(props) {
      super(props);
      this.state = { ...this.props.user};
    }

    onAddPointClick = () => {
        //console.log('+1 clicked... from separate method');
        let newPoint = this.state.point + this.props.valueAttr;
        this.setState({point: newPoint});
    }

    onRemovePointClick = () => {
        let newPoint = this.state.point - this.props.valueAttr;
        this.setState({point: newPoint});
    }
    
    render(){
      return (
        <div className="User">
            <p>Name : {this.state.name}</p>
            <p>Points - {this.state.point}</p>
            <button onClick= {this.onAddPointClick} >
                +1
            </button>
            <button onClick= {this.onRemovePointClick}>
                -1
            </button>
            <hr/>
        </div>
      );
    }
  }

  export default User;