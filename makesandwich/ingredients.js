const Ingredients = React.createClass({

    setColours :   function(e) {
            var elementsList = document.getElementsByClassName('ingList');
            for (let i = 0; i < elementsList.length; i++) {
                // elementsList[i].style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
                switch(elementsList[i].innerText) {
                    case "Bread":
                        elementsList[i].style.backgroundColor = "#b08568";
                         elementsList[i].style.height = "45px";
                         elementsList[i].style.lineHeight = "45px";
                        break;
                    case "Lettuce":
                        elementsList[i].style.backgroundColor = "#90EE90";
                        break;
                    case "Ketchup":
                        elementsList[i].style.backgroundColor = "#E31100";
                        break;
                    case "Mustard":
                        elementsList[i].style.backgroundColor = "#ffd500";
                        break;
                    case "Mayo":
                        elementsList[i].style.backgroundColor = "whitesmoke";
                        break;
                    default:
                        // randomising the unrecognised colours
                        elementsList[i].style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
                }
            }
            },

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={ingredient} className={'ingList'} onMouseOver={this.setColours}>
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