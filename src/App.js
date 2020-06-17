import React, { useReducer } from "react";

import "./App.css";
import Input from "./components/input";
import TaskList from "./components/taskList";
import Filters from "./components/filters";

export const TasksContext = React.createContext();

const initialState = {
  tasks: [
    { task: "Walk the dog", id: 1, finished: false },
    { task: "Wash the car", id: 2, finished: true },
    { task: "Cook", id: 3, finished: false },
    { task: "Watch a movie", id: 4, finished: true },
    { task: "Finish awesome project", id: 5, finished: false },
  ],
  hideFinished: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      const finishedTask = state.tasks.find((task) => task.id === action.payload);
      finishedTask.finished = !finishedTask.finished;
      const finishedTaskIndex = state.tasks.indexOf(finishedTask);
      let newTaskArray = state.tasks;
      newTaskArray[finishedTaskIndex] = finishedTask;
      return {
        ...state,
        tasks: newTaskArray,
      };
    case "DELETE_TASK":
      let deletedArray = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: deletedArray,
      };
    case "ADD_TASK":
      const lastId = state.tasks.reduce((a, b) => {
        return a > b.id ? a : b.id;
      }, 0);
      const newTask = {
        task: action.payload,
        id: lastId + 1,
        finished: false,
      };
      let newStateArray = [...state.tasks, newTask];

      return {
        ...state,
        tasks: newStateArray,
      };
    case "FINISHED_TOGGLE":
      return {
        ...state,
        hideFinished: !state.hideFinished,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TasksContext.Provider
      value={{ tasks: state.tasks, dispatch, hideFinished: state.hideFinished }}>
      <div className='app'>
        <div className='wrapper'>
          <Input />
          <Filters />
          <TaskList />
        </div>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
