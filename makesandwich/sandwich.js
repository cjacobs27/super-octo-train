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

    addCondiment: function(e) {
        var condiment = e.target.value;
        this.setState({
            items: this.state.items.concat([condiment]),
            ingredient: ''
        });
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
                <button onClick={this.addCondiment} value={"Ketchup"}>Add Ketchup</button>
                <button onClick={this.addCondiment} value={"Mustard"}>Add Mustard</button>
                <button onClick={this.addCondiment} value={"Mayo"}>Add Mayo</button>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);