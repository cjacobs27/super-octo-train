import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Sandwich from './sandwich.js';

// export default class Ingredients extends React.Component {
class Ingredients extends React.Component {

    setColours(e) {
        function checkNotCustomIngredient() {
            return e.target.tagName.toLowerCase() === 'div' && e.target.innerText.toUpperCase() !== "BREAD"
                && e.target.innerText.toUpperCase() !== "LETTUCE"
                && e.target.innerText.toUpperCase() !== "KETCHUP"
                && e.target.innerText.toUpperCase() !== "MUSTARD"
                && e.target.innerText.toUpperCase() !== "MAYO"
        }

        let elementsList = document.getElementsByClassName('ingList');
        for (let i = 0; i < elementsList.length; i++) {
            let elementText = elementsList[i].innerText;
            switch (elementText.toUpperCase()) {
                case "BREAD":
                    elementsList[i].style.backgroundColor = "#b08568";
                    elementsList[i].style.height = "45px";
                    elementsList[i].style.lineHeight = "45px";
                    break;
                case "LETTUCE":
                    elementsList[i].style.backgroundColor = "#90EE90";
                    elementsList[i].style.border = "2px solid transparent";
                    break;
                case "KETCHUP":
                    elementsList[i].style.backgroundColor = "#E31100";
                    elementsList[i].style.border = "2px solid transparent";
                    break;
                case "MUSTARD":
                    elementsList[i].style.backgroundColor = "#ffd500";
                    elementsList[i].style.border = "2px solid transparent";
                    break;
                case "MAYO":
                    elementsList[i].style.backgroundColor = "whitesmoke";
                    elementsList[i].style.border = "2px solid transparent";
                    break;
                default:
                    if (e.target.tagName.toLowerCase() === 'li') {
                        break;
                    }
                    else if (checkNotCustomIngredient()) {
                        function setRandomColour(e) {
                            e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            e.target.style.border = "2px solid transparent";
                        }

                        setRandomColour(e, i)
                    }
                    else {
                        break;
                    }
            }
        }
    }

    render() {
        let displayIngredient = (ingredient) =>
            <div id={ingredient} className={'ingList'} onMouseEnter={this.setColours}>
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

}

export { Ingredients as default}

ReactDOM.render(<Sandwich/>, document.body);
