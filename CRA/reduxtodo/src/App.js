import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        todoItems : [
          { name: "Clean dishes", completed: false },
          { name: "Take out the dog", completed: false },
          { name: "Walk the trash", completed: true }
        ],
        inputTodo: { name: "", completed: false }
      };
      this.changeStatusOnItem = this.changeStatusOnItem.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  //* form functions

  handleChange(event) {
    event.preventDefault();
    let inputTodo = {
      name: event.target.value,
      completed: false
    };
    this.setState(
      {inputTodo}
    )
  }

  handleSubmit(event) {
    //* default 는 event 가 발생하지 않는 것이므로 이것을 안하면
    //* event 가 cancel 자동적으로 cancel 되어진다.
    event.preventDefault();
    this.setState({
      //* append inputTodo to todoItem
      todoItems: [...this.state.todoItems, this.state.inputTodo],
      inputTodo: {
        name: "", completed: false 
      }
    }
    );
  }

  //* todoItems function
  changeStatusOnItem(index) {
    const todoItems = this.state.todoItems;
    console.log(index);

    //* completed value is set to be oppsite
    todoItems[index].completed = !todoItems[index].completed;
    this.setState({
      todoItems
    })
  }

  render() {
    const todoItems = this.state.todoItems.map((item, index) => (
      <li
        key = {index}
        onClick={() => this.changeStatusOnItem(index)}
        className={item.completed ? "todo-done" : ""}
      > 
      {/*}  
        {item.name}{item.completed ? "true" : "false"}
      */}
        {item.name}      
      </li>
    )
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add todo:
          </label>
          <input type="text" name="todo" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {/* display todoItems items */}
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default App;

