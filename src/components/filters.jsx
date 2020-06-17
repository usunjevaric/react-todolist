import React, { useContext } from "react";
import { TasksContext } from "../App";

const Filters = () => {
  const { dispatch, hideFinished } = useContext(TasksContext);
  return (
    <div className='filters'>
      <button className='filter-button' onClick={() => dispatch({ type: "FINISHED_TOGGLE" })}>
        {hideFinished ? "Show finished" : "Hide finished"}
      </button>
    </div>
  );
};

export default Filters;
