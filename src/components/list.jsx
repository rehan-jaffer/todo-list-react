import React, { Component } from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["do something", "or not", "idc really"]
    };
  }
  task_list() {
    const list_items = this.state.tasks.map((task) =>
      <li class='task-item'><a onClick={() => this.remove_task(task)}>{task}</a></li>
    );
    return (<ul>{list_items}</ul>)
  }
  remove_task(name) {
    this.setState((prevState, props) => {
      return {tasks: prevState.tasks.filter(task => task != name)};
    });
  }
  add_task(name) {
    let new_name = document.querySelector(".new_task").value;
    this.setState((prevState, props) => {
      return {tasks: prevState.tasks.concat([new_name])};
    });
    document.querySelector(".new_task").value = "";
  }
  render(props) {
    return (<div class="todo-list">
    {this.task_list()}
    <input className="new_task" />
    <button onClick={() => this.add_task('lol')}>Add</button>
    </div>)
  }
}

export default List;
