import React ,{useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
import './ViewForm.css'

function ViewForm() {
    const {id} = useParams()

    const [val,setVal] = useState(null)

    useEffect(()=>{
        fff()
    },[])

    const fff = async()=>{
        const res = await fetch(`http://localhost:4040/form/${id}`)
        const vvv = await res.json()
        console.log(vvv.rows)
        setVal({form_title:vvv.rows[0].form_title,form_fields:JSON.parse(vvv.rows[0].form_fields)})

    }

    console.log(val)
  if(!val){
    return null
  }

  return (
    <div className="formPage">
    <form>
        <h1>{JSON.parse(val.form_title)}</h1>
        <table className="formtable">
          {val.form_fields.map((field) => {
            return (
              <tbody key={field.id}>
                <tr>
                  <td>
                    <label htmlFor={field.title}>{field.title}:</label>
                  </td>
                  <td>
                    <input
                      type={field.input}
                      name={field.title}
                      placeholder={field.placeholder}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <button>Save</button>
    </form>  
  </div>
  
  )
}

export default ViewForm