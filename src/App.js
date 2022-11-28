import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/movie/:id" />
      </Routes>
    </Router>
  );
}

export default App;
