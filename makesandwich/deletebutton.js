const DeleteButton = React.createClass({

    render: function() {

        var deleteButton = (timestamp) =>
            <button onClick= {this.props.removeIngredient} value= {this.props.timestamp.indexOf(timestamp)} id ={"del"}>X</button>;


        return (
        <div>
            {this.props.timestamp.map(deleteButton)}
        </div>
         );
    }

});


React.render(<Sandwich />, document.body);