import React from "react";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/Redirects/First";
import Experience from "./components/Redirects/Experience";
import Projects from "./components/Redirects/Projects";
import Main from "./components/Redirects/Main";
// import Test from "./components/Test";

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/action/3.1" element={<Experience />} />
          <Route path="/action/3.3" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
