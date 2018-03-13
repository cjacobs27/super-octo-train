import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import Sandwich from './sandwich.js';

class DeleteButton extends React.Component {

    render() {

        var deleteButton = (timestamp) =>
            <div>
                <button onClick={this.props.removeIngredient} value={this.props.timestamp.indexOf(timestamp)}
                        id={"del"}>X
                </button>
            </div>;

        return (
            <ul id={"deleteButton"}>
                {this.props.timestamp.map(deleteButton)}
            </ul>
        );
    }

}

export default DeleteButton;

ReactDOM.render(<Sandwich />, document.getElementById("app"));