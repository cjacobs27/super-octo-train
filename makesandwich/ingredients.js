const Ingredients = React.createClass({

        setColours :   function(e) {
            var elementsList = document.getElementsByClassName('ingList');
            for (let i = 0; i < elementsList.length; i++) {
                var elementText = elementsList[i].innerText;
                switch(elementText.toUpperCase()) {
                    case "BREAD":
                        elementsList[i].style.backgroundColor = "#b08568";
                         elementsList[i].style.height = "45px";
                         elementsList[i].style.lineHeight = "45px";
                        break;
                    case "LETTUCE":
                        elementsList[i].style.backgroundColor = "#90EE90";
                        break;
                    case "KETCHUP":
                        elementsList[i].style.backgroundColor = "#E31100";
                        break;
                    case "MUSTARD":
                        elementsList[i].style.backgroundColor = "#ffd500";
                        break;
                    case "MAYO":
                        elementsList[i].style.backgroundColor = "whitesmoke";
                        break;
                    default:
                        if(e.target.tagName.toLowerCase() === 'li') {
                            break;
                        }
                        else if (e.target.tagName.toLowerCase() === 'div' && e.target.innerText.toUpperCase() !== "BREAD"
                        && e.target.innerText.toUpperCase() !== "LETTUCE"
                        && e.target.innerText.toUpperCase() !== "KETCHUP"
                        && e.target.innerText.toUpperCase() !== "MUSTARD"
                        && e.target.innerText.toUpperCase() !== "MAYO") {
                            function setRandomColour (e) {
                            e.target.style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
                        }
                            setRandomColour(e,i)
                        }
                        else {
                            break;
                        }
                }
            }
            },

    render: function() {
        var displayIngredient = (ingredient) =>
        <div id ={ingredient} className={'ingList'} onMouseEnter={this.setColours}>
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