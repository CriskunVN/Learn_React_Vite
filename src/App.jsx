import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Learning React JS" },
  ]);

  const name = "kun";
  const age = 21;

  const addNewData = (name) => {
    alert(`Name : ${name}`);
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewData={addNewData} />
        <TodoData name={name} age={age} todoList={todoList} />
        <div className="todo-img">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
