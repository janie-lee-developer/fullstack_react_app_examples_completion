//webpack lets me use babel

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        const count = this.state.count;

        return (
            <div>
                <h1>You yelled {count} times</h1>
                <div className = { count >= 5 ? 'yell' : ''}>
                    {new Array(count).fill('!').join('')}
                </div>
                <button onClick = { () => this.setState({ count: count + 1})}>Yell</button>
            </div>
        )
    }
}
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);