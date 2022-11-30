import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          element={<Details />}
        />
      </Routes>
    </Router>
  );
}

export default App;
