// Your code here!
import React from 'react';
import ReactDom from 'react-dom';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        },
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div id='container'>
                <div id='navbar'>
                    Counter.js
                </div>
                <div id='counter'>
                    <h1>{this.state.count}</h1>
                    <button onClick = {this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}

ReactDom.render(<Counter />, document.getElementById('app'))