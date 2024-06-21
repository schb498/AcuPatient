import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import axios from "axios";
import "./App.css";
import { Button } from "./components/ui/button";
import PatientList from "./pages/PatientListPage";
import { Layout } from "./components/Layout";
import PatientListPage from "./pages/PatientListPage";

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
    <>
      {/* <h1>AcuPatient</h1>
      <p className='read-the-docs'>Store and view your patients' data</p>
      <Button onClick={fetchData}>Fetch Data</Button>
      <p>{response}</p>
      <main>
        <PatientList />
      </main> */}
      <Layout />
      <Router>
        <Routes>
          <Route path='/patient-list' element={<PatientListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
