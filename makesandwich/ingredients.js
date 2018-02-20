var Ingredients = React.createClass({

    render: function() {
        var displayIngredient = (ingredient) => <li>{ingredient}</li>;

        return (
        <ul>
        {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});

React.render(<Sandwich />, document.body);