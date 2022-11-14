import { Routes, Route } from "react-router-dom";



import CreateEmployeeComponent from "./Components/CreateEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import ViewEmployeeComponent from "./Components/ViewEmployeeComponent";
import UpdateEmployeeComponent from "./Components/UpdateEmployeeComponent";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ListEmployeeComponent />} />
        <Route
          path="/CreateEmployeeComponent"
          element={<CreateEmployeeComponent />}
        />

        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
        <Route
          path="/update-employee/:id"
          element={<UpdateEmployeeComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
