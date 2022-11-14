import React from "react";
import  ListEmployeeComponent from "./ListEmployeeComponent";


export const HeaderComponent = () => {

  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a className="navbar-brand">Employee Management App</a>
            </div>
          </nav>
          
        </header>
      </div>
    </>
  );
}
export default HeaderComponent;
