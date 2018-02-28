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
            // items: this.state.items.concat([condiment]),
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

    // getColours: function(e) {
    //     this.colors = ['#ff0000', '#00ff00', '#0000ff'];
    //     this.random_color = this.colors[Math.floor(Math.random() * this.colors.length)];
    //     return this.random_color;
    // },

    // divColours: function(e) {
    //     // this.document.getElementById('#ing').style.color = random_color;
    //     color: this.getColors(),
    //     border: "2px solid #000000",
    // },

    render: function () {
        return (
            <div>
                <h1> My Sandwich</h1>

             <form onSubmit={this.addIngredient}>
                    <input ref="input" onChange={this.onChange} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

                <br></br>

                <button onClick={this.addCondiment} value={"Bread"} id={"bread"}>Add Bread</button>
                <button onClick={this.addCondiment} value={"Lettuce"} id={"lettuce"}>Add Lettuce</button>
                <button onClick={this.addCondiment} value={"Ketchup"} id={"ketchup"}>Add Ketchup</button>
                <button onClick={this.addCondiment} value={"Mustard"} id={"mustard"}>Add Mustard</button>
                <button onClick={this.addCondiment} value={"Mayo"} id={"mayo"}>Add Mayo</button>

                <Ingredients items={this.state.items} removeIngredient={this.removeIngredient}/>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);
