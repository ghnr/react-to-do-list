import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_input: "",
      tasks: []
    };
  }

  onChange = event => {
    this.setState({ current_input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let new_task = this.state.current_input;

    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].task_string === new_task) {
        return;
      }
    }

    this.setState({
      tasks: [...this.state.tasks, { task_string: new_task, done: false }]
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="task"
            placeholder="Enter a task"
            onSubmit={this.handleSubmit}
            onChange={this.onChange}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </form>

        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
