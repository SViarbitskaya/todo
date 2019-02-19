import React, { Component } from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newTask: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({newTask: event.target.value});
    this.props.onTaskChange(event.target.value);
  }

  handleSubmit(event) {
    alert('A new task was added: ' + this.state.newTask);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Task:
          <input type="text" value={this.props.newTask} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TaskForm;