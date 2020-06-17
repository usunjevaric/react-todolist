import React, { useState, useContext } from "react";
import { TasksContext } from "../App";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(TasksContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: inputValue });
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className='input-form'>
      <input type='text' placeholder='Enter new task' value={inputValue} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit} disabled={!inputValue}>
        Add task
      </button>
    </form>
  );
}

export default Input;
