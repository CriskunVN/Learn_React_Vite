const TodoData = (props) => {
  const { todoList, deleteTodo } = props;
  console.log("check", todoList);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((el, index) => {
        return (
          <div className={`todo-item`} key={el.id}>
            <div>{el.name}</div>
            <button
              onClick={() => {
                handleDelete(el.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
