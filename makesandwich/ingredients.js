const Ingredients = React.createClass({

    setColours :   function(e) {
            document.getElementById('ing').style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
        // return document.e.style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);

    },

    divColours : {
        // generate a random hex colour - all <li> are same random colour
        // backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
        //  backgroundColor: this.getColour,
        border: "2px solid #000000",
    },

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={"ing"} style={this.divColours} onMouseOver= {this.setColours} >
            <li>
        {ingredient}
        </li>
        </div>;

        return (
        <ul>
            {this.props.items.map(displayIngredient)}
        </ul>
         );
    }

});


React.render(<Sandwich />, document.body);