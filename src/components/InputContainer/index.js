import React from "react";

export default function InputContainer(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          props.setNum1(event.target.value);
        }}
        value={props.num1}
      />

      <input
        type="text"
        onChange={(event) => {
          props.setNum2(event.target.value);
        }}
        value={props.num2}
      />
    </div>
  );
}
