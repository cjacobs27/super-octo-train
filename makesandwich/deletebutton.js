const DeleteButton = React.createClass({

    render: function() {

        var deleteButton = (timestamp) =>
            <div>
            <button onClick= {this.props.removeIngredient} value= {this.props.timestamp.indexOf(timestamp)} id ={"del"}>X</button>
            </div>;

        return (
            <ul id={"deleteButton"}>
            {this.props.timestamp.map(deleteButton)}
            </ul>
         );
    }

});

React.render(<Sandwich />, document.body);