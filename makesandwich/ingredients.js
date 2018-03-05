const Ingredients = React.createClass({

    setColours :   function(e) {
            // var elementsList = document.getElementsByTagName('li');
            var elementsList = document.getElementsByClassName('ingList');
            for (let i = 0; i < elementsList.length; i++) {
                elementsList[i].style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
            }


        // switch statement to set specific colours if value is specific thing ie condiment name?
            },

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={"ing"} className={'ingList'} onMouseOver={this.setColours}>
            <li>
        {ingredient}
        </li>
        </div>;

        return (
            <div>
        <ul>
            {this.props.items.map(displayIngredient)}
        </ul>
            </div>
         );
    }

});


React.render(<Sandwich />, document.body);