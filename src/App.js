import { useEffect, useState } from "react"
import "./App.css"
import { Cards } from "./components/Card"
import apis from "./api/api"
function App() {
  let [employessData, setEmployeesData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await apis.fetchData()
      if (response) setEmployeesData(response)
      else {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(employessData, "employees")
  return (
    <section className="spacing-lg">
      <Cards />
    </section>
  )
}

export default App
