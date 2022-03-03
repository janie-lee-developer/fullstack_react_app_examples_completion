//run webpack to run this code in browser
//ability pack our files
//webpack comes with loaders, to transpile our code.
//JSX is being transpil to JS by babel and we want to pre-compile it.
//so if I run ./node_modules/.bin/webpack, I would get an error aying that webpack needs a loader.
//We've been using webpack defaults, but this time we will make our own setting.
//  1. touch webpack.config.js
//  2. When I run webpack, ebpack will end up picking up this file (webpack.config.js).
//  3. create webpack.config.js.
//  4. npm i babel-loader --save-dev
//  5. npm i @babel/core --save-dev
//  6. npm i @babel/preset-react --save-dev
//  7. I can erase off babel cdn script on index.html head tag.
//  8. insert <script src='dist/main.js' defer></script> on index.html head tag, because it has it all.
//  9. erase off the length script tag that had all the code.
//  10. ./node_modules/.bin/webpack --watch --mode=development
//  11.    Add these two lines for script in json package. so npm and webpack runs together. 
//          "build": "webpack",
//          "build:dev": "npm run build -- --mode=development --watch"
//  12. I can also install npm i react react-dom --save-dev to import modules instead of using cdn script link on index.html

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

const Item = ({ item, removeItem, idx })=> {
    return (
        <li>
            { item }
            <button onClick = { () => removeItem(idx) }>x</button>
        </li>
    )
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items,
            message: ''
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(){
        this.setState({items: [...this.state.items, Math.random()]});
    }

    removeItem(idx){
        const items = this.state.items.filter((_, _idx) => _idx != idx);
        this.setState({items});
    }

    render() {
        const { items, message } = this.state;
        const {addItem, removeItem} = this;

        return (
            <div>
                <h2>Count is {items.length}</h2>
                <h3>{message}</h3>
                <button onClick={addItem}>Add An Item</button>
                <ul>
                    {items.map((item, idx) => <Item idx = { idx } removeItem = { removeItem } key = { idx } item= { item }/>)}
                </ul>
            </div>
        )
    }
}

const items = [1, 2];
ReactDOM.render(<App />, app);