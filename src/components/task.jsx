import React, { Component } from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<li onClick={this.props.onClick}>{this.props.name}</li>);
  }
}

export default Task;
