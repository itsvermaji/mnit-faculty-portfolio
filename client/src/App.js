import Navigation from "./Components/layouts/Navigation";
import { Routes, Route } from "react-router-dom";
// pages
import HomePage from "./Pages/Home";
import RegistrationPage from './Pages/Registration'
import LoginPage from './Pages/Login'
// import FacultyProfile from "./Pages/FacultyProfile";
import PageNotFound from "./Pages/PageNotFound";
import Success from "./Pages/Success";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/*" element={<ProfilePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
