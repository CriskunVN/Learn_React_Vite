const TodoNew = (props) => {
  const { addNewData } = props;
  // addNewData("PhuKun");
  return (
    <div className="todo-input">
      <input type="text" placeholder="Add a todo..." />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
