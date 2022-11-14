import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { NavLink } from "react-router-dom";

export default function ViewEmployeeComponent() {

  const [data, setdata] = useState("")
  const ids = useParams();
  useEffect(() => {
       fetch(`http://localhost:8080/api/v1/employees/${ids.id}`)
         .then(res => res.json())
         .then(data => setdata(data))
         .catch(err=>console.log(err))
  }, [data])

  
  const deleteDetails = async () => {
    try {
      fetch(`http://localhost:8080/api/v1/employees/delete/${ids.id}`, {
        method: "DELETE",
        mode: "cors",
      });
        alert("Employee's Details Deleted !!!");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <HeaderComponent />
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Employee First Name: {data.firstName}</label>
          </div>
          <div className="row">
            <label> Employee Last Name: {data.lastName}</label>
          </div>
          <div className="row">
            <label> Employee Email ID: {data.emailId}</label>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <button
          style={{ marginLeft: "70%", marginTop: "1%" }}
          className="btn btn-danger"
          onClick={deleteDetails}
        >
          Delete{" "}
        </button>
      </NavLink>
    </div>
  );
}
