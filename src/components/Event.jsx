import React from "react";

export default function Event() {
  const handleClick = (event, id) => {
    console.log("Event: ", event);

    console.log("Id: ", id);
  };

  const handleEdit = (event) => {
    console.log("Event: ", event);
  };

  const handleChange = (event) => {
    console.log("Change: ", event.target.value);
  };
  return (
    <div>
      <button onClick={(event) => handleClick(event, 10)}>Click me</button>
      <button onClick={handleEdit}>Edit</button>
      <input id="input" type="text" onChange={handleChange} />
    </div>
  );
}
