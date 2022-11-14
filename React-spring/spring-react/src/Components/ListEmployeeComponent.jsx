import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export const ListEmployeeComponent = () => {
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");
  
  const [data, setdata] = useState("");
  const [First_Name, firstN] = useState("");
  const [Last_Name, firstL] = useState("");
  const [Email, email1] = useState("");
  const ids = useParams();
 
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/employees/`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error : ", err));
  }, []);

const changeName = (event) => {
  setId(event);
  console.log(id);
};
  return (
    <div>
      <HeaderComponent />
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <NavLink to="CreateEmployeeComponent">
          <button className="btn btn-primary"> Add Employee</button>
        </NavLink>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name </th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((val) => {
              return (
                <>
                  <tr>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.emailId}</td>
                    <td>
                      <NavLink to={`/update-employee/${val.id}`}>
                        <button className="btn btn-info">Update </button>
                      </NavLink>
                   

                      <NavLink to={`/view-employee/${val.id}`}>
                        <button
                          style={{ marginLeft: "10px" }}
                          className="btn btn-info"
                          value={id}
                          onChange={(e) => setId(e.target.val.id)}
                        >
                          View{" "}
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>

  );
};

export default ListEmployeeComponent;
