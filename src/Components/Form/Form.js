import React from "react";
import { useState } from "react";

//styles
import "./Form.scss";

function Form() {
  const [firstName, setFirstName] = useState("");

  const handleOnChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
  };

  return (
    <form>
      <input
        name="firstName"
        placeholder="First Name"
        type="text"
        onChange={handleOnChange}
      />
      <button className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
