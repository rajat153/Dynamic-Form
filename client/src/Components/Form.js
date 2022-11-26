import React, { useState } from "react";
import "./Form.css";

function Form() {
  const intialVal = { name: "", password: "", mobile: "", date: "" };
  const [val, SetVal] = useState(intialVal);
  const [head, setHead] = useState({ value: "Title Change", edit: false });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button submit");
  };

  const updateVal = (e) => {
    console.log("value updates");
    setHead((prev)=>{
      return {...prev,value:e.target.value}
    })
  };

  const handled = (e) => {
    setHead((prev)=>{
      console.log(prev)
      return {...prev, edit : !prev.edit}
    })

    console.log("change title");
  };

  console.log(val);

  const handleChange = (e) => {
    SetVal((preVal) => {
      return { ...preVal, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} onChange={handleChange} className="form">
        {head.edit ? (
          <>
                    <input type="text" defaultValue={head.value} onChange={updateVal} />
                    <i onClick={handled}>💾</i>

          </>
        ) : (
          <>
                    <h1>{head.value}</h1>

                  <i onClick={handled}>✎</i>

          </>
        )}

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="mobile">Mobile:</label>
        <input type="number" id="mobile" name="mobile" />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <button type="submit">Save Details</button>
      </form>

      <div className="part2">
        <div>
          <button>+</button>
          <input type="text " />
          <button>-</button>
        </div>
        <div>
          <button>+</button>
          <input type="text " />
          <button>-</button>
        </div>
        <div>
          <button>+</button>
          <input type="text " />
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
