const Ingredients = React.createClass({

    divColours : {
        colors : ['#ff0000', '#00ff00', '#0000ff'],
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
        border: "2px solid #000000",
    },

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={"ing"} style={this.divColours}><li>
        {ingredient}
        </li></div>;

        return (
        <ul>
            {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});


React.render(<Sandwich />, document.body);