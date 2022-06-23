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
      setIsValid(true);
    }
  };

  const firstNameClass = isValid ? "null" : "error";

  return (
    <form>
      <input
        className={`.col ${firstNameClass}`}
        name="firstName"
        placeholder="First Name"
        // style={{ borderColor: isValid ? "black" : "red" }}
        type="text"
        value={firstName}
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
