import React from "react";

function Child(props) {
  return (
    <>
      <p>{props.value}</p>
      <p>{props.title}</p>
    </>
  );
}

export default Child;
