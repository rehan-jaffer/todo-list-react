import React, { Component } from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classes = ["task-item"];
    if (this.props.completed === true) {
      classes.push("completed");
    }
    let class_list = classes.join(" ");
    return (<li className={class_list} onClick={this.props.onClick}>{this.props.name}</li>);
  }
}

export default Task;
