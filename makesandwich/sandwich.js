var Sandwich = React.createClass({

    i : 0,

    getInitialState: function() {
        return {
            items: [],
            timestamp: [],
            time: '',
            ingredient: '',
            itemsWithTimestamp: {}
        };
    },

    onChange: function(e) {
        this.setState({
            ingredient: e.target.value,
            time: String(Math.round(+new Date() + 1/1000)),
        });
    },

    addIngredient: function(e) {
        console.log("ingredient: " + this.state.ingredient);
        console.log("time: " + this.state.time);
        this.setState({
            items: this.state.items.concat([this.state.ingredient]),
            ingredient: '',
            timestamp: this.state.timestamp.concat([this.state.time]),
            time: ''
        });
        // console.log(this.state.timestamp);
        e.preventDefault();
        React.findDOMNode(this.refs.input).focus();
    },

    addCondiment: function(e) {
        // the value of a CONDIMENT is whatever string it's been given in HTML below.
        var condiment = e.target.value;
        this.setState({
            i : this.i++,
            // attempt at fixing issue where multiple ingredients with identical names mean the script always chooses the index
            // of the first instance of that ingredient in the items array for deletion, eg Bread, Ham, Bread, 3rd bread X clicked
            // removes FIRST bread from the list. Not perfect as i shouldn't be displayed in list + continues incrementing regardless
            // of array item deletion.
            items: this.state.items.concat([condiment + " " + this.i]),
            timestamp: this.state.timestamp.concat([String(Math.round(+new Date() + 1/1000))]),
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

    // this doesn't work
    // removeIngredient: function(e) {
    //     // var ingredientIndex = e.target.value;
    //     // looking for the index of the TIMESTAMP to remove the ing from the ITEMS list
    //     console.log(e.target.key);
    //     var ingredientTimestampIndex = this.state.timestamp.indexOf(e.target.key);
    //     this.setState(state => {
    //         state.items.splice(ingredientTimestampIndex, 1);
    //         // also edit the timestamp list
    //         state.timestamp.splice(ingredientTimestampIndex, 1);
    //         return {items: state.items};
    //     });
    // },
    // removeIngredient: function(e) {
    //     // update state of itemsWithTimestamp where key = time and value = ingredient
    //     // each div item has key = time
    //     this.setState(state => {
    //
    //         return {items: state.items};
    //     });
    // },

    render: function () {
        return (
            <div>
                <h1> My Sandwich</h1>

             <form onSubmit={this.addIngredient}>
                    <input ref="input" onChange={this.onChange} key= {this.state.timestamp} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

                <br></br>

                {/*<button onClick={this.addCondiment} value={"Bread"} id={"bread"}>Add Bread</button>*/}
                {/*<button onClick={this.addCondiment} value={"Lettuce"} id={"lettuce"}>Add Lettuce</button>*/}
                {/*<button onClick={this.addCondiment} value={"Ketchup"} id={"ketchup"}>Add Ketchup</button>*/}
                {/*<button onClick={this.addCondiment} value={"Mustard"} id={"mustard"}>Add Mustard</button>*/}
                {/*<button onClick={this.addCondiment} value={"Mayo"} id={"mayo"}>Add Mayo</button>*/}

                <Ingredients items={this.state.items} removeIngredient={this.removeIngredient}/>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);
