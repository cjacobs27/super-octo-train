import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import Component from 'react';
import Ingredients from './ingredients.js';
import DeleteButton from './deletebutton.js';

export default class Sandwich extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            timestamp: [],
            time: '',
            ingredient: '',
        }
    }

    onChange(e) {
        this.setState({
            ingredient: e.target.value,
            time: String(Math.round(+new Date() + 1 / 1000)),
        });
    }

    addIngredient(e) {
        this.setState({
            items: this.state.items.concat([this.state.ingredient]),
            ingredient: '',
            timestamp: this.state.timestamp.concat([this.state.time]),
            time: '',
        });
        React.findDOMNode(this.refs.input).focus();
        e.preventDefault();
    }

    addCondiment(e) {
        let condiment = e.target.value;
        this.setState({
            items: this.state.items.concat([condiment]),
            timestamp: this.state.timestamp.concat([String(Math.round(+new Date() + 1 / 1000))]),
            ingredient: ''
        });
        React.findDOMNode(this.refs.input).focus();
    }

    removeIngredient(e) {
        let elementIndex = e.target.value;
        console.log(this.state.items[elementIndex], this.state.timestamp[elementIndex]);
        let items = this.state.items;
        let timestamp = this.state.timestamp;
        delete items[elementIndex];
        delete timestamp[elementIndex];
        this.setState({items});
        this.setState({timestamp});
    }

    render() {

        return (
            <div>
                <div id="panel">
                <h1> Make a Sandwich</h1>

                <form onSubmit={this.addIngredient}>
                    <input placeholder="What do you want in your sandwich?" ref="input" onChange={this.onChange}
                           key={this.state.timestamp} value={this.state.ingredient}/>
                    <button>Add Ingredient</button>
                </form>

                <br></br>

                <button onClick={this.addCondiment} value={"Bread"} id={"Bread"}>Add Bread</button>
                <button onClick={this.addCondiment} value={"Lettuce"} id={"Lettuce"}>Add Lettuce</button>
                <button onClick={this.addCondiment} value={"Ketchup"} id={"Ketchup"}>Add Ketchup</button>
                <button onClick={this.addCondiment} value={"Mustard"} id={"Mustard"}>Add Mustard</button>
                <button onClick={this.addCondiment} value={"Mayo"} id={"Mayo"}>Add Mayo</button>
                <h3> Touch the sandwich ingredients to colour them in! </h3>
                </div>

                <div id="row">
                    <div id="column"><Ingredients items={this.state.items} timestamp={this.state.timestamp}
                                                  removeIngredient={this.removeIngredient}/>
                        <img src="../plate.png" id={"plate"} alt="sandwich plate"></img></div>
                    <div id="column"><DeleteButton items={this.state.items} timestamp={this.state.timestamp}
                                                   removeIngredient={this.removeIngredient}/></div>
                </div>

            </div>

        );

    }

}

// export default Sandwich;

ReactDOM.render(<Sandwich/>, document.body);

