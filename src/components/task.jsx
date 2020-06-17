import React, { useContext } from "react";
import { ReactComponent as Trash } from "../assets/delete.svg";
import { ReactComponent as Tick } from "../assets/tick.svg";
import { TasksContext } from "../App";
const Task = ({ title, finished, taskId }) => {
  const { dispatch } = useContext(TasksContext);
  return (
    <div className={`task ${finished ? "finished" : null}`}>
      {title}
      <div className='icons'>
        <button
          className={`icon-btn ${finished ? "green-check" : null}`}
          onClick={() => dispatch({ type: "CHANGE_STATUS", payload: taskId })}>
          <Tick />
        </button>
        <button
          className='icon-btn'
          onClick={() => dispatch({ type: "DELETE_TASK", payload: taskId })}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default Task;
