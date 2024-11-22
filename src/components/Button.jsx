import React from "react";

export default function Button({ children, disabled, id = "button" }) {
  console.log("children: ", children);
  console.log("disabled: ", disabled);

  // Trong JS, có 6 giá trị luôn luôn nhận là false: 0, "", null, undefined, NaN, false

  return (
    <div>
      <button id={id} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

// Button.defaultProps = {
//   id: "btn",
// };
