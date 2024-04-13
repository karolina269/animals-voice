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
          <Route path="/animals-voice" element={<Home />} />
          <Route path="/animals-voice/about" element={<About />} />
          <Route path="/animals-voice/actions" element={<Actions />} />
          <Route path="/animals-voice/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
