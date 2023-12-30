
const fetchData = async () => {

  try {
    const response = await fetch("http://localhost:3004/employeesData")
    const data = await response.json()
    return { response: data }
  } catch (error) {
    return { error: error }
  }
}

const apis={fetchData}

export default apis;
