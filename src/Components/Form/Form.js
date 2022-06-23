import React from "react";
import { useState } from "react";

//styles
import "./Form.scss";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleOnChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "") {
      setIsValid(false);
    } else {
      console.log(firstName);
    }
  };

  return (
    <form>
      <input
        name="firstName"
        placeholder="First Name"
        style={{ borderColor: isValid ? "null" : "red" }}
        type="text"
        onChange={handleOnChange}
      />
      {isValid ? null : <p>First name cannot be empty!</p>}
      <button className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
