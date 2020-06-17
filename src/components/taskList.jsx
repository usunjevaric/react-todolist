import React, { useContext } from "react";
import Task from "./task";
import { TasksContext } from "../App";

const TaskList = () => {
  const { tasks, hideFinished } = useContext(TasksContext);
  //filter for create array, if hideFinished seted, remove finished tasks from array
  const taskList = tasks
    .filter((task) => (hideFinished ? task.finished !== true : task))
    .map((task) => (
      <Task key={task.id} title={task.task} finished={task.finished} taskId={task.id} />
    ));
  return <div>{taskList}</div>;
};

export default TaskList;
