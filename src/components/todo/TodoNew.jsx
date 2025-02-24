import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setInputValue] = useState("");

  const { addNewData } = props;

  const handleClick = () => {
    addNewData(inputValue);
  };

  const handleChange = (name) => {
    setInputValue(name);
  };
  return (
    <div className="todo-input">
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="text"
        placeholder="Add a todo..."
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div> My name : {inputValue} </div>
    </div>
  );
};

export default TodoNew;
