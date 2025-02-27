const TodoData = (props) => {
  const { todoList } = props;
  console.log("check", todoList);
  return (
    <div className="todo-data">
      {todoList.map((el, index) => {
        return (
          <div className={`todo-item`} key={el.id}>
            <div>{el.name}</div>
            <button>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
