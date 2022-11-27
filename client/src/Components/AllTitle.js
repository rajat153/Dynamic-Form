import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import './AllTitle.css'



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

  console.log(data);
  return (
    <div className='alltitle'>
      <h2>All Titles</h2>
      <div>
        {data.map((item) => {
          return (
            <div>
              <span key={uuidv4()}>
                {item.id}.{JSON.parse(item.form_title)}
              </span>
              <button
                onClick={() => {
                  seeForm(item.id);
                }}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTitle;
