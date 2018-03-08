const Ingredients = React.createClass({

    // UNSUCCESSFUL ATTEMPT AT SOLVING WEIRD CONDIMENT CHANGING COLOUR BUG

    // setColours :   function(e) {
    //     function setRandomColour (e) {
    //     e.target.style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
    //     }
    //         e.target.removeEventListener("onmouseenter", setRandomColour);
    //         // var ingText = e.target.innerText;
    //         var elementsList = document.getElementsByClassName('ingList');
    //         for (let i = 0; i < elementsList.length; i++) {
    //             var elementText = elementsList[i].innerText;
    //             if (elementText.toUpperCase() !== "BREAD" | "LETTUCE" || "KETCHUP" || "MUSTARD" || "MAYO") {
    //                     // this ensures that only the moused-over, non-condiment ingredient changes
    //                     e.target.addEventListener("onmouseenter", setRandomColour(e, i));
    //             }
    //             else if (elementText.toUpperCase() === "BREAD" || "LETTUCE" || "KETCHUP" || "MUSTARD" || "MAYO") {
    //                 switch(elementText.toUpperCase()) {
    //                     // this switch ensures the condiments display correctly
    //                 case "BREAD":
    //                     elementsList[i].style.backgroundColor = "#b08568";
    //                      elementsList[i].style.height = "45px";
    //                      elementsList[i].style.lineHeight = "45px";
    //                     break;
    //                 case "LETTUCE":
    //                     elementsList[i].style.backgroundColor = "#90EE90";
    //                     break;
    //                 case "KETCHUP":
    //                     elementsList[i].style.backgroundColor = "#E31100";
    //                     break;
    //                 case "MUSTARD":
    //                     elementsList[i].style.backgroundColor = "#ffd500";
    //                     break;
    //                 case "MAYO":
    //                     elementsList[i].style.backgroundColor = "whitesmoke";
    //                     break;
    //                 default:
    //                     break;
    //                     // this ensures that only the moused-over ingredient changes
    //                     e.target.addEventListener("onmouseenter", setRandomColour(e, i));
    //             }
    //             }
    //         }
    //         },

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
                        function setRandomColour (e) {
                            e.target.style.backgroundColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
                        }
                        // this ensures that only the moused-over ingredient changes
                        e.target.addEventListener("onmouseenter", setRandomColour(e, i));
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