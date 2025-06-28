import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  return (
    <div className="user-card">
      <h2>
        Count :
        <input type="button" onClick={decreaseCounter} value="-" /> {count}{" "}
        <input type="button" onClick={increaseCounter} value="+" />
      </h2>
      <h2>Name : {name}</h2>
      <h3>Location : Bengaluru</h3>
      <h4>Contact : kumarankur908@gmail.com</h4>
    </div>
  );
};

export default User;
