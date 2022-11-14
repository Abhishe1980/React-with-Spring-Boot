import React ,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";



export default function UpdateEmployeeComponent() {
 const [data, setdata] = useState("");
 const [First_Name, firstN] = useState("");
 const [Last_Name, firstL] = useState("");
 const [Email, email1] = useState("");
 const ids = useParams();
 useEffect(() => {
   fetch(`http://localhost:8080/api/v1/employees/${ids.id}`)
   
     .then((res) => res.json())
     .then((data) => setdata(data))
     .catch((err) => console.log(err));
 }, [data]);

     const updateDetails = async () => {


  try {
    console.log(firstN)
    console.log(firstL)
    console.log(email1)
    await fetch(`http://localhost:8080/api/v1/employees/${ids.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: First_Name,
        lastName: Last_Name,
        emailId: Email,
      }),
    });
    alert("Employee's Details Updated !!!");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
  


     }
 
  

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name:</label>
                  <input
                    placeholder={data.firstName}
                    name="firstName"
                    className="form-control"
                    value={First_Name}
                    onChange={(e) => firstN(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder={data.lastName}
                    name="lastName"
                    className="form-control"
                    value={Last_Name}
                    onChange={(e) => firstL(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder={data.emailId}
                    name="lastName"
                    className="form-control"
                    value={Email}
                    onChange={(e) => email1(e.target.value)}
                  />
                </div>
                <NavLink to="/">
                  <button className="btn btn-success" onClick={updateDetails}>
                    Save
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
