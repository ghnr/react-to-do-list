import React from "react";
import "./task.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: props.done };
  }

  handleClick = event => {
    this.setState({ done: !this.state.done });
  };

  render() {
    let itemClassName = this.state.done ? "taskdone" : "task";
    let buttonClassName = this.state.done ? "deleteButtonDone" : "deleteButton";
    return (
      <div className={"container"}>
        <div onClick={this.handleClick} className={itemClassName}>
          <span>{this.props.task}</span>
        </div>
      </div>
      // <img src={"https://i.imgur.com/3Kv6ohW.png"}></img>
      // <button onClick={this.handleClick_} className={buttonClassName}>
        // X
      // </button>
    );
  }
}

export default Task;
