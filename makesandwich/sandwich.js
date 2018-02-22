var Sandwich = React.createClass({

    i : 0,

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
            i : this.i++,
            // attempt at fixing issue where multiple ingredients with identical names mean the script always chooses the index
            // of the first instance of that ingredient in the items array for deletion, eg Bread, Ham, Bread, 3rd bread X clicked
            // removes FIRST bread from the list. Not perfect as i shouldn't be displayed in list + continues incrementing regardless
            // of array item deletion.
            items: this.state.items.concat([condiment + " " + this.i]),
            ingredient: ''
        });
        React.findDOMNode(this.refs.input).focus();
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
                    <input ref="input" onChange={this.onChange} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

                <br></br>

                <button onClick={this.addCondiment} value={"Bread"}>Add Bread</button>
                <button onClick={this.addCondiment} value={"Lettuce"}>Add Lettuce</button>
                <button onClick={this.addCondiment} value={"Ketchup"}>Add Ketchup</button>
                <button onClick={this.addCondiment} value={"Mustard"}>Add Mustard</button>
                <button onClick={this.addCondiment} value={"Mayo"}>Add Mayo</button>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);