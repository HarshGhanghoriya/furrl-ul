import { useEffect, useState } from "react";
import "./App.css";
import apis from "./api/api";
import { EmployeeTree } from "./components/EmployeeTree";

function App() {
  let [employessData, setEmployeesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await apis.fetchData();
      if (response) setEmployeesData(response[0]);
      else {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  

  console.log(employessData, "employees");
  return (
    <section className="spacing-lg  intro-div">

    <EmployeeTree employessData={employessData}/>

    </section>
  );
}

export default App;
