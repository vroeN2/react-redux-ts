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
            <Route path="/">
              <Countries />
            </Route>

            <Route path="/saved">
              <Saved />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
