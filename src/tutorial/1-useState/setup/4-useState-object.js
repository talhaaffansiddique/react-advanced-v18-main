import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "talha",
    age: "34",
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setage] = useState(24);
  const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    // setPerson({ ...person, message: " Helo world" });
    setMessage("hello world");
  };

  //console.log(person);
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
