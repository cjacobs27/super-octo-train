import React from 'react';
import ReactDOM from 'react-dom';
import Sandwich from './sandwich';

export default class DeleteButton extends React.Component {

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

ReactDOM.render(<Sandwich/>, document.body);