import React from "react";
import "./styles.css";
import { Todo } from "./todo.js";

export class App extends React.Component {
  state = {
    value: "",
    todos: []
  };
  handleClick() {
    console.log(this.state.value);
    console.log(this.state.todos);
    var temparray = this.state.todos;
    temparray.push(this.state.value);
    this.setState({
      todos: temparray,
      value: ""
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log(this.state.value);
  }
  deleteTodo = index => {
    var temparray = this.state.todos;
    temparray.reverse();
    temparray.splice(index, 1);
    temparray.reverse();
    this.setState({
      todos: temparray
    });
  };
  render() {
    return (
      <div>
        <h1>Add your todo</h1>

        <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e, this.todo, this)}
        />
        <button onClick={() => this.handleClick()}>add</button>
        {this.state.todos
          .slice(0)
          .reverse()
          .map((todo, index) => (
            <Todo
              deleteTodo={this.deleteTodo}
              state={this.state}
              todo={todo}
              index={index}
              function={console.log(this.state.todos)}
            />
          ))}
      </div>
    );
  }
}
