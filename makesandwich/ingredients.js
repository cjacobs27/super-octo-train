const Ingredients = React.createClass({

    render: function() {
        var displayIngredient = (ingredient) =>
        <div><li>{ingredient}
        <button onClick= {this.props.removeIngredient} value={this.props.items.indexOf(ingredient)} id ={"ing"}> X </button>
        </li></div>;

        return (
        <ul>
        {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});

React.render(<Sandwich />, document.body);