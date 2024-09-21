import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Layout } from "./components/Layout";
import { PatientDataTable } from "./components/PatientDataTable";
import "./app/globals.css";

function App() {
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000");
      console.log(res.data);
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Error fetching data");
    }
  };

  return (
    <Router>
      {/* <h1>AcuPatient</h1>
      <p className='read-the-docs'>Store and view your patients' data</p>
      <Button onClick={fetchData}>Fetch Data</Button>
      <p>{response}</p>
      <main>
        <PatientList />
      </main> */}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<h3>DASHBOARD</h3>} />
          <Route path='/patients' element={<PatientDataTable />} />
          <Route path='/appointments' element={<h3>APPOINTMENTS</h3>} />
          <Route path='/calendar' element={<h3>CALENDAR</h3>} />
          <Route path='*' element={<h3>404 - Not Found</h3>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
