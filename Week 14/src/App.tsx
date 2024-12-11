import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users.page";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profiles" element={<Users />} />
      <Route path="/profiles/:id" element={<Users />} />
    </Routes>
  );
}

export default App;
