import React from "react";

export default function ButtonContainer(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setResult(parseFloat(props.num1) + parseFloat(props.num2));
        }}
      >
        +
      </button>
    </div>
  );
}
