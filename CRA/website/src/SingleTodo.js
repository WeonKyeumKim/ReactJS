import React, { Component } from "react";

/*
class SingleTodo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.todo}<button onClick={this.props.delete}>Delete</button></li>
    );
  }
}
*/

/* remove this keyword */
const SingleTodo = props => {
  return (
    <li>{props.todo}<button onClick={props.delete}>Delete</button></li>
  );
}
export default SingleTodo;
