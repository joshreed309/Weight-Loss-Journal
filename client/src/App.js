import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="addentry">Add Entry</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
