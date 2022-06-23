import React from "react";
import { useState } from "react";

//component
import Child from "./Child/Child";

//styles
import "./Parent.scss";

const data = [
  {
    id: 1,
    title: "star wars",
  },
  {
    id: 2,
    title: "star wars 2",
  },
  {
    id: 3,
    title: "star wars 3",
  },
];

function Parent() {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const mapData = data.map((item) => {
    return <Child key={item.id} title={item.title} />;
  });

  return (
    <div className="parent">
      <input type="text" onChange={handleOnChange} />

      <Child value={value} />

      {data.map((item) => {
        return <Child key={item.id} title={item.title} />;
      })}
    </div>
  );
}

export default Parent;
