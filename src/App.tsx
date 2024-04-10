import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./routes/Home";
import About from "./routes/About";
import Actions from "./routes/Actions";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <Router>
      <AppNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
