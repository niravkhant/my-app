import Textarea from "./components/textarea";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import About from "./components/About";
// import { Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");

    }
  }

  return (
    <>
      <Navbar title="Formatify" home="Home" aboutus="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textarea text="Enter Text to Analyse" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
      {/* <Routes>
        <Route path="/" element={<Textarea text="Enter Text to Analyse" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />

      </Routes> */}


    </>

  );

}
export default App;




