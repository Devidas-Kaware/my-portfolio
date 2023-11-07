import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Preloader from "./common/Preloader";
import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./common/ScrollToTop";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
