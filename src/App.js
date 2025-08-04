import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import AddTutorial from "./components/Addtutorial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/addtutorial" element={<AddTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;



