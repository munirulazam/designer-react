import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Explore from "./components/pages/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Trending from "./components/pages/Trending/Trending";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exect element={<Home />} />
          <Route path="/about" exect element={<About />} />
          <Route path="/contact" exect element={<Contact />} />
          <Route path="/explore" exect element={<Explore />} />
          <Route path="/trending" exect element={<Trending />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
