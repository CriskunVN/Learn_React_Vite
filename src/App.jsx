import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Learning React JS" },
  ]);

  const addNewData = (name) => {
    const newTodo = {
      id: randomId(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteToDo = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewData={addNewData} />

        {todoList.length > 0 ? (
          <TodoData todoList={todoList} deleteTodo={deleteToDo} />
        ) : (
          <div className="todo-img">
            <img src={reactLogo} alt="" className="logo" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
