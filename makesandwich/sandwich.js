var Sandwich = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            ingredient: ''
        };
    },

    onChange: function(e) {
        this.setState({ingredient: e.target.value});
    },

    addIngredient: function(e) {
        this.setState({
            items: this.state.items.concat([this.state.ingredient]),
            ingredient: ''
        });
        e.preventDefault();

    },

    removeIngredient: function(e) {
        var ingredientIndex = e.target.value;
        console.log(ingredientIndex);
        this.setState(state => {
            state.items.splice(ingredientIndex, 1);
            return {items: state.items};
        });
    },

    render: function () {
        return (
            <div>
                <h1> My Sandwich</h1>

                <Ingredients items={this.state.items} removeIngredient={this.removeIngredient}/>

                <form onSubmit={this.addIngredient}>
                    <input onChange={this.onChange} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);