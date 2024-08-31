import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import PersonalInfo from "../pages/PersonalInfo.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";
import Resume from "../pages/Resume.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default Router;
