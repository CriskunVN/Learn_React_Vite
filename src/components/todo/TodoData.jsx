const TodoData = (props) => {
  console.log(props);
  return (
    <div className="todo-data">
      <div> Learning React</div>
      <div> Learning React JS</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
