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

    render: function () {
        return (
            <div>
                <h1> My Sandwich</h1>

                <Ingredients items={this.state.items} />

                <form onSubmit={this.addIngredient}>
                    <input onChange={this.onChange} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

            </div>

        );

    }

});

React.render(<Sandwich />, document.body);