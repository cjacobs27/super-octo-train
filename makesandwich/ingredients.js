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
        <div id ={"ing"} style={this.divColours}><li>{ingredient}
        <button onClick= {this.props.removeIngredient} key= {this.props.timestamp} value={this.props.items.indexOf(ingredient)} id ={"del"}>X</button>
        </li></div>;

        return (
        <ul>
        {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});

console.log(Ingredients);

React.render(<Sandwich />, document.body);