// component = html + css + js

import "./style.css";

const MyComponent = () => {
  const kun = {
    name: "kun",
    age: 20,
  };
  return (
    // fragment
    <>
      <div className="abc">{JSON.stringify(kun)} learn React</div>
      <div>Kun basic react</div>
    </>
  );
};

export default MyComponent;
