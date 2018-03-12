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
        this.setState({
            items: this.state.items.concat([this.state.ingredient]),
            ingredient: '',
            timestamp: this.state.timestamp.concat([this.state.time]),
            time: '',
        });
        React.findDOMNode(this.refs.input).focus();
        e.preventDefault();
    },

    addCondiment: function(e) {
        var condiment = e.target.value;
        this.setState({
            i : this.i++,
            items: this.state.items.concat([condiment]),
            timestamp: this.state.timestamp.concat([String(Math.round(+new Date() + 1/1000))]),
            ingredient: ''
        });
        React.findDOMNode(this.refs.input).focus();
    },

    removeIngredient: function(e) {
        // from TIMESTAMP
        var elementIndex = e.target.value;
        console.log(this.state.items[elementIndex],this.state.timestamp[elementIndex]);
        var items = this.state.items;
        var timestamp = this.state.timestamp;
        delete items[elementIndex];
        delete timestamp[elementIndex];
        this.setState({ items });
        this.setState({ timestamp });
    },

    render: function () {
        return (
            <div>

                <h1> Make a Sandwich</h1>

             <form onSubmit={this.addIngredient}>
                    <input placeholder="What do you want in your sandwich?" ref="input" onChange={this.onChange} key= {this.state.timestamp} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

                <br></br>

                <button onClick={this.addCondiment} value={"Bread"} id={"bread"}>Add Bread</button>
                <button onClick={this.addCondiment} value={"Lettuce"} id={"lettuce"}>Add Lettuce</button>
                <button onClick={this.addCondiment} value={"Ketchup"} id={"ketchup"}>Add Ketchup</button>
                <button onClick={this.addCondiment} value={"Mustard"} id={"mustard"}>Add Mustard</button>
                <button onClick={this.addCondiment} value={"Mayo"} id={"mayo"}>Add Mayo</button>
                <h3> Touch the sandwich ingredients to colour them in! </h3>

                <div id="row">
                    <div id="column"><Ingredients items={this.state.items} timestamp={this.state.timestamp} removeIngredient={this.removeIngredient}/>
                        <img src = "plate.png" id={"plate"} alt="sandwich plate"></img></div>
                  <div id="column"><DeleteButton items={this.state.items} timestamp={this.state.timestamp} removeIngredient={this.removeIngredient}/></div>
                </div>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);
