import React from "react";

const ErrorExample = () => {
  let title = "randon title";
  const handleClick = () => {
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2> {title}</h2>
      <button type="Button " className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
