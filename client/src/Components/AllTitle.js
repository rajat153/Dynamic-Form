import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ViewForm from "./ViewForm";


function AllTitle() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  

  const viewForm = async () => {
    try {
      let res = await fetch("http://localhost:4040/");
      console.log(res);
      if (res.status === 200) {
        res = await res.json();
        console.log(res.rows);
        setData(res.rows);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    viewForm();
  }, []);

  const seeForm = (id) => {
    navigate(`/form/${id}`);
    console.log("ffd");
  };

  const filterForm = (id) =>{
    data.filter((form)=>{
        return form.id !== id

    })
  }

  console.log(data);
  return (
    <div>
      <h2>All Titles</h2>
      <div>
        {data.map((item) => {
          return (
            <>
              <li key={uuidv4()}>
                {item.id}.{item.form_title}
              </li>
              <button
                onClick={() => {
                  seeForm(item.id);
                }}
              >
                View
              </button>
            </>
          );
        })}
      </div>
      <ViewForm ff={filterForm} />
    </div>
  );
}

export default AllTitle;
