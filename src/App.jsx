import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Events from "./pages/Events";

function App() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/events"
          element={isAuthenticated ? <Events /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
