import { useEffect, useState } from "react";
import "./App.css";
import apis from "./api/api";
import { EmployeeTree } from "./components/EmployeeTree";
import { sampleData } from "./data";

function App() {
  let [employessData, setEmployeesData] = useState(sampleData[0]);

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

  

  return (
    <section className="spacing-lg fixed-width  intro-div">
      <h1>Employees Heirarchy</h1>
      <div>Keep zoom at 25%</div>
    <EmployeeTree employessData={employessData}/>

    </section>
  );
}

export default App;
