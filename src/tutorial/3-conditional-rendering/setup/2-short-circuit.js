import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
     <h1>Value : {secondValue}</h1> */}
      <h1>{text || "talha"}</h1>

      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {isError && <h2>Error....</h2>}
      {isError ? (
        <p>thers is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
