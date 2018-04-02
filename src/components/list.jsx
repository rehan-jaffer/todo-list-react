import React, { Component } from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {"do something": true, "or not": true, "idc really": false}
    };
  }
  task_list() {
    const list_items = Object.entries(this.state.tasks).map((task) =>
      <li class='task-item'><a onClick={() => this.remove_task(task[0])}>{task[0]}</a></li>
    );
    return (<ul>{list_items}</ul>)
  }
  remove_task(name) {
    this.setState((prevState, props) => {
      let next_state = {};
      for (let k of Object.keys(prevState.tasks)) {
        if (k != name) {
          next_state[k] = name;
        }
      }
      return {tasks: next_state};
    });
  }
  add_task(name) {
    let new_name = document.querySelector(".new_task").value;
    this.setState((prevState, props) => {
      let next_state = prevState.tasks;
      next_state[new_name] = true;
      return {tasks: next_state};
    });
    document.querySelector(".new_task").value = "";
  }
  render(props) {
    return (<div class="todo-list">
    {this.task_list()}
    <input className="new_task" />
    <button onClick={() => this.add_task('lol')} className="btn btn-primary">Add</button>
    </div>)
  }
}

export default List;
