const Ingredients = React.createClass({

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={"ing"}><li>{ingredient}
        <button onClick= {this.props.removeIngredient} value={this.props.items.indexOf(ingredient)} id ={"del"}>X</button>
        </li></div>;

        return (
        <ul>
        {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});

React.render(<Sandwich />, document.body);