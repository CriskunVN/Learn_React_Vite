import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const name = "kun";
  const age = 21;
  const data = {
    address: "Da nang",
    addressDetails: "98 dstk",
    phoneNumber: "0987654321",
  };

  const addNewData = (name) => {
    alert(`Name : ${name}`);
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewData={addNewData} />
        <TodoData name={name} age={age} data={data} />
        <div className="todo-img">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
