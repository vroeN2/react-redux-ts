import components from "./components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { Countries, Navbar, Saved, Error } = components;

  return (
    <Router>
      <div className="main">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Countries />} />

            <Route path="/saved" element={<Saved />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
