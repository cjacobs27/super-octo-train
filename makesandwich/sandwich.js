var Sandwich = React.createClass({

    i : 0,

    getInitialState: function() {
        return {
            items: [],
            timestamp: [],
            time: '',
            ingredient: '',
        };
    },

    onChange: function(e) {
        this.setState({
            ingredient: e.target.value,
            time: String(Math.round(+new Date() + 1/1000)),
        });
    },

    addIngredient: function(e) {
        // console.log("ingredient: " + this.state.ingredient);
        // console.log("time: " + this.state.time);
        this.setState({
            items: this.state.items.concat([this.state.ingredient]),
            ingredient: '',
            timestamp: this.state.timestamp.concat([this.state.time]),
            time: '',
        });
        // this.itemsWithTimestamp[this.state.ingredient] = this.state.time;
        // console.log(this.state.timestamp)
        React.findDOMNode(this.refs.input).focus();
        e.preventDefault();
        // console.log(this.state.timestamp);
        // console.log(this.state.items);
    },

    addCondiment: function(e) {
        // to get this working: addCondiment needs to set ingredient & time states as onChange() does,
        // BUT ingredient = the BUTTON value rather than the input box
        // so the code can be the same as addIngredient, only the onChange portion has to be different & included in the
        // addCondiment method.
        // the value of a CONDIMENT is whatever string it's been given in HTML below.
        var condiment = e.target.value;
        this.setState({
            i : this.i++,
            items: this.state.items.concat([condiment + " " + this.i]),
            timestamp: this.state.timestamp.concat([String(Math.round(+new Date() + 1/1000))]),
            ingredient: ''
        });
        React.findDOMNode(this.refs.input).focus();
    },

    removeIngredient: function(e) {
        var elementIndex = e.target.value
        // keyPairs.get(ingredient);
        var items = this.state.items;
		delete items[elementIndex];
		this.setState({ items });
    },

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

                <Ingredients items={this.state.items} timestamp={this.state.timestamp} itemsWithTimestamp={this.state.itemsWithTimestamp} removeIngredient={this.removeIngredient}/>
                {/*<Ingredients itemsWithTimestamp={this.state.itemsWithTimestamp} removeIngredient={this.removeIngredient}/>*/}

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);
