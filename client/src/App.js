import { Routes, Route, NavLink} from "react-router-dom";
import React from "react";
import ViewForm from "./Components/ViewForm";
import AllTitle from "./Components/AllTitle";
import "./App.css";
import CreateFormPage from "./Components/CreateFormPage";

function App() {

  return (
    <div className="App">
      <h1>Dynamic Forms</h1>
      <NavLink className="navbar-brand" to="/form/create" style={({isActive})=>{
        return {color:isActive ? 'red':'grey'}
      }}>
        Create Form
      </NavLink>
      <Routes>
      <Route path="/" element={<AllTitle />} />
        <Route path="/form/create" element={<CreateFormPage />} />
        <Route path="/form/:id" element={<ViewForm />} />
      </Routes>
    </div>
  );
}

export default App;
