import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
export default function CreateEmployeeComponent() {
  const [First_Name, firstN] = useState("");
  const [Last_Name, firstL] = useState("");
  const [Email, email1] = useState("");
  const navigate = useNavigate();
  console.log(First_Name);
  const handleSubmit = async () => {
     await fetch("http://localhost:8080/api/v1/employees", {
       method: "POST",
       mode: "cors",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         firstName: First_Name,
         lastName: Last_Name,
         emailId:Email,
       }),
     });
     navigate("/")
    //  function   getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Employee</h3>
    //     }else{
    //         return <h3 className="text-center">Update Employee</h3>
    //     }
    // }

  };

  return (
    <div>
      <HeaderComponent />
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1>Create Employee</h1>
            {/* {
                                    this.getTitle()
                                } */}
            <div>
              <div className="card-body">
                <div className="form-group">
                  <label> First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={First_Name}
                    onChange={(e) => firstN(e.target.value)}
                  />
                  {console.log(First_Name)}
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={Last_Name}
                    onChange={(e) => firstL(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    className="form-control"
                    name="emailId"
                    value={Email}
                    onChange={(e) => email1(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ marginTop: "5%" }}
                >
                  Save
                </button>
                <NavLink to="/">
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px", marginTop: "5%" }}
                  >
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
