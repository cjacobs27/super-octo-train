const Ingredients = React.createClass({

    divColours : {
        colors : ['#ff0000', '#00ff00', '#0000ff'],
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
        border: "2px solid #000000",
    },

    render: function() {
        var displayIngredient = (ingredient) =>
        // var displayIngredient = (ingredient) =>
        <div id ={"ing"} style={this.divColours}><li>
        {ingredient}
        {/*<DeleteButton items={this.props.items} timestamp={this.props.timestamp} removeIngredient={this.removeIngredient}/>*/}
        </li></div>;

        // var deleteButton = (timestamp) =>
        //     <button onClick= {this.props.removeIngredient} value= {this.props.timestamp.indexOf(timestamp)} id ={"del"}>X</button>;


        return (
        <ul>
            {this.props.items.map(displayIngredient)}
            {/*{this.props.timestamp.map(deleteButton)}*/}
        </ul>
         );
    }

});


React.render(<Sandwich />, document.body);