import React, { useState } from "react";
function AcordionComp({ question, answer }) {
  const [text, setText] = useState(false);
  const display = () => {
    console.log("change text value");
    setText(!text);
  };
  return (
    <>
      <div className="questions">
        <h1>{question}</h1>
        <p onClick={display}>+</p>
      </div>
      <div className="answers">{text && <p>{answer}</p>}</div>
    </>
  );
}

export default AcordionComp;
