import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard"; // Import the Dashboard component
import Studio from "./components/Studio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="studio" element={<Studio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
