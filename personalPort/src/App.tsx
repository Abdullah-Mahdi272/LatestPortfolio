import React from "react";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/Redirects/First";
import Second from "./components/Redirects/Second";
import Main from "./components/Redirects/Main";
// import Test from "./components/Test";

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      {/* <p>Hi</p> */}

      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/link" element={<Second />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
