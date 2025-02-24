const TodoData = (props) => {
  const { address, phoneNumber } = props.data;
  return (
    <div className="todo-data">
      <div>My data is {address}</div>
      <div>My Phone Number is {phoneNumber}</div>
      <div> Learning React</div>
      <div> Learning React JS</div>
    </div>
  );
};

export default TodoData;
