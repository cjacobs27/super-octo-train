const Ingredients = React.createClass({

    divColours : {
        colors : ['#ff0000', '#00ff00', '#0000ff'],
        // random_color : this.colors[Math.floor(Math.random() * 3)],
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
        // backgroundColor: this.getColours.color,
        border: "2px solid #000000",
    },

    render: function() {
        var displayIngredient = (ingredient) =>
        // var displayIngredient = (ingredient) =>
        <div id ={"ing"} style={this.divColours}><li>
        {ingredient}
        {/*<button onClick= {this.props.removeIngredient} value= {this.props.items.indexOf(ingredient)} id ={"del"}>X</button>*/}

        {/*THIS IS THE LINE THAT "WORKS"*/}
        {/*<button onClick= {this.props.removeIngredient} value={this.props.items.indexOf(ingredient)} id ={"del"}>X</button>*/}
        </li></div>;

        var deleteButton = (timestamp) =>
            <button onClick= {this.props.removeIngredient} value= {this.props.timestamp.indexOf(timestamp)} id ={"del"}>X</button>;


        return (
        <ul>
            {this.props.items.map(displayIngredient)}
            {this.props.timestamp.map(deleteButton)}
        </ul>
         );
    }

});


React.render(<Sandwich />, document.body);