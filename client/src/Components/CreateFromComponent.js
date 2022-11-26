import React, { useState } from "react";
import './CreateFormComponent.css'

function CreateFromComponent(props) {
  const [attr, setAttr] = useState({ input: "text", placeholder: "", title: "" });

  const handleChange = (e) => {
    setAttr((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(attr);

  const handleClick =()=>{
    props.onsave(attr) 
  }

  return (
    <div className="createInput">
      <h1>Add Form Fields</h1>
      <label htmlFor="input">Input Type:</label>
      <select
        onChange={handleChange}
        id="input"
        defaultValue={attr.input}
        name="input"
      >
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="email"> Email</option>
        <option value="password">Password</option>
      </select>
      <label htmlFor="placeholder">Placeholder:</label>
      <input  onChange={handleChange}
        id="placeholder"
        defaultValue={attr.placeholder}
        name="placeholder" />
      <label htmlFor="title">Title:</label>
      <input  onChange={handleChange}
        id="title"
        defaultValue={attr.title}
        name="title" />
      <button onClick={handleClick} vv="raajt">Save</button>
    </div>
  );
}

export default CreateFromComponent;

