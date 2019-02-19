import React, { Component } from 'react';
import List from './List';
import TaskForm from './TaskForm';
import './ToDo.css';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.state = {
      value: "test",
      letters: ["A","B","C"],
      task: ''
    };
  }

  handleTaskChange(newTask) {
    this.setState({task: newTask});
  }

  render() {
    const newTask = this.state.task;
    return (
      <div class="ToDo">
        <h1>To Do List</h1>
        <div>
          <TaskForm />
        </div>
        <div>
          <List value={this.state.letters} />
        </div>
      </div>
    );
  }
}

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/

//export default App;
export default ToDo;
