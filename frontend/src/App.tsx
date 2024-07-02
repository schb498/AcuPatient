import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Button } from "./components/ui/button";
import PatientList from "./pages/PatientListPage";
import { Layout } from "./components/Layout";
import PatientListPage from "./pages/PatientListPage";
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

      <Layout />
      <Routes>
        <Route path='/dashboard' element={<h3>DASHBOARD</h3>} />
        <Route path='/patients' element={<h3>PATIENTS</h3>} />
        <Route path='/appointments' element={<h3>APPOINTMENTS</h3>} />
        <Route path='/calendar' element={<h3>CALENDAR</h3>} />
      </Routes>
    </Router>
  );
}

export default App;
