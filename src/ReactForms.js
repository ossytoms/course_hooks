import React, { useState } from "react";
export default function ReactForms() {
  const [inputs, setInputs] = useState({});
  const [buttonValue, setButtonValue] = useState("Submit");
  const [myCountry, setMyCountry] = useState("Sweden");

  const formSubmit = (e) => {
    e.preventDefault();
    setButtonValue(inputs.name);
    console.table(inputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const text = e.target.text;
    const country = e.target.country;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <ul>
        <form onSubmit={formSubmit}>
          <li>
            <select
              name="country"
              value={inputs.country || ""}
              onChange={handleChange}
            >
              <option value="Italy">Italy</option>
              <option value="Sweden">Sweden</option>
              <option value="Austria">Austria</option>
            </select>
          </li>
          <li>
            <label>
              Enter your name:
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Enter your age:
              <input
                type="number"
                name="age"
                onChange={handleChange}
                value={inputs.age || ""}
              />
            </label>
          </li>
          <li>
            <textarea name="text" value={inputs.text} onChange={handleChange} />
          </li>
          <button type="submit">{buttonValue ? buttonValue : "Submit"}</button>
        </form>
      </ul>
    </>
  );
}
