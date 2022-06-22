import React from "react";

//styles
import "./Form.scss";

function Form() {
  return (
    <form>
      <input name="firstName" placeholder="First Name" type="text" />
      <button className="form-button">Submit</button>
    </form>
  );
}

export default Form;
