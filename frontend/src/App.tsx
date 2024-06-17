import React, { useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

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
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>AcuPatient</h1>
      <p className='read-the-docs'>Store and view your patients' data</p>
      <Button onClick={fetchData}>Fetch Data</Button>
      <p>{response}</p>
    </>
  );
}

export default App;
