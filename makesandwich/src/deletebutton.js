import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import Component from 'react';
import Sandwich from './sandwich.js';

// export default class DeleteButton extends React.Component {
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

export { DeleteButton as default}
// export default DeleteButton;

ReactDOM.render(<Sandwich/>, document.body);