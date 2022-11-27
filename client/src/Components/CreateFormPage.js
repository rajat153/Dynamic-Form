import React, { useState } from "react";
import CreateFromComponent from "./CreateFromComponent";
import './CreateFormPage.css'

function CreateFormPage(props) {
  const [formfields, setFormfields] = useState([]);
  const [heading, setHeading] = useState({
    value: "Title Change",
    edit: false,
  });


  const postData = async(formfields)=>{
    try{
        let res = await fetch("http://localhost:4040/submit",{
            method:"POST",
            credentials: 'include',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({formfields, value: heading.value}),    
        })
        console.log(res)
        if(res.status===200){
            res = await res.json()
            alert('Form created successfully')
            console.log(res)
        }
    }catch(err){
        alert('Failed to create a form')
        console.log(err)
    }
  }

  const updateHeading = (e) => {
    console.log("value updates");
    setHeading((prev) => {
      return { ...prev, value: e.target.value };
    });
  };

  const editHeading = (e) => {
    setHeading((prev) => {
      console.log(prev);
      return { ...prev, edit: !prev.edit };
    });
    console.log("change title");
  };

  const onDelete = (id) => {
    const filterfields = formfields.filter((item) => item.id !== id);
    setFormfields(filterfields);
  };
  const handlesave = (fieldData) => {
    if (formfields.length < 20) {
      setFormfields([...formfields, { ...fieldData, id: Date.now() }]);
      
    } else {
      alert("Limit exceed");
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    postData(formfields)
    setFormfields([])
    setHeading({ value: "Title Change",
    edit: false,})
  };

  console.log(props.vv);
  console.log(formfields,heading);

  return (
    <div className="formPage">
      <form onSubmit={FormSubmit}>
        {heading.edit ? (
          <>
            <input
              type="text"
              defaultValue={heading.value}
              onChange={updateHeading}
            />
            <i onClick={editHeading}>💾</i>
          </>
        ) : (
          <>
            <h1>{heading.value}</h1>
            <i onClick={editHeading}>✎</i>
          </>
        )}

        <table className="formtable">
          {formfields.map((field) => {
            return (
              <tbody key={field.id}>
                <tr>
                  <td>
                    <label htmlFor={field.title}>{field.title}:</label>
                  </td>
                  <td>
                    <input
                      readOnly={true}
                      type={field.input}
                      name={field.title}
                      placeholder={field.placeholder}
                    />
                    <button
                      onClick={() => {
                        onDelete(field.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        {  formfields.length > 0 ? <button>Save to Database</button>:null}
      </form>
      <div><CreateFromComponent onsave={handlesave} /></div>  
    </div>
  );
}

export default CreateFormPage;
