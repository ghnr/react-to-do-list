import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task_obj => (
          <Task
            key={task_obj.task_string}
            task={task_obj.task_string}
            done={task_obj.done}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
