import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./app/content/Main/Main";
import Header from "./app/content/Header/Header";
import Footer from "./app/content/Footer/Footer";
import Contact from "./app/content/Contact/Contact";
import About from "./app/content/About/About";
import Assignment3 from "./app/content/Assignment3/Assignment3";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/assignment3" element={<Assignment3 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;