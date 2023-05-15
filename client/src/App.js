import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import Contact from "./pages/Contact/Contact";
import SignUpPage from "./pages/Signup/SignUpPage";
import Editor from "./pages/Editor/Editor";
import NavBar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
