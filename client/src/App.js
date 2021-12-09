import Navigation from "./Components/layouts/Navigation";
import HomePage from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import FacultyProfile from "./Pages/FacultyProfile";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="users/" element={<FacultyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
