const TodoNew = (props) => {
  const { addNewData } = props;
  // addNewData("PhuKun");

  const handleClick = () => {
    addNewData("PhuKun");
    // alert("click me");
  };

  const handleChange = (name) => {
    console.log(name);
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
    </div>
  );
};

export default TodoNew;
