import React, { Component } from 'react';
import Task from './task.jsx';
import { Row, Grid, Col } from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {"do something": true, "or not": true, "idc really": false}
    };
  }
  task_list() {
    const list_items = Object.entries(this.state.tasks).map((task) =>
      <Task completed={task[1]} name={task[0]} onClick={() => this.update_task(task[0])} />
    );
    return (<ul>{list_items}</ul>)
  }
  update_task(name) {
    this.setState((prevState, props) => {
      let next_state = prevState.tasks;
      next_state[name] = !prevState.tasks[name];
      return {tasks: next_state};
    });
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
      next_state[new_name] = false;
      return {tasks: next_state};
    });
    document.querySelector(".new_task").value = "";
  }
  render(props) {
    return (<Grid classname="todo-list">
    <Row>
      <Col xs={12} md={8}>
      {this.task_list()}
      <input className="new_task" />
      <button onClick={() => this.add_task('lol')} className="btn btn-primary">Add</button>
      </Col>
    </Row>
    </Grid>)
  }
}

export default List;
