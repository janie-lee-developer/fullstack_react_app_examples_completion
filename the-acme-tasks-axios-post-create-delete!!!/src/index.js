import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: []
    };
    this.create = this.create.bind(this);
  }
  async componentDidMount(){
    const response = await axios.get('/api/tasks');
    const tasks = response.data;
    this.setState({ tasks });
  }
  async destroy(taskToDelete){
    await axios.delete(`/api/tasks/${taskToDelete.id}`);
    const tasks = this.state.tasks.filter(task => task.id !== taskToDelete.id);
    this.setState({ tasks });
  }
  async create(){
    const response = await axios.post('/api/tasks');
    const task = response.data;
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  }
  render(){
    const tasks = this.state.tasks;
    return (
      <div>
        <h1>Acme Tasks ({tasks.length})</h1>
        <button onClick={ this.create }>Create</button>
        <ul>
          {
            tasks.map( task => {
              return (
                <li key={task.id}>{ task.name } <button onClick={ ()=> this.destroy(task)}>x</button></li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
