// App.jsx
//

import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import CompanyInfo from "./components/CompanyInfo";
import PigeonCollection from "./components/PigeonCollection";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/company-info" element={<CompanyInfo />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:username" element={<UserProfile />}>
          <Route
            path="pigeon-collection"
            element={<PigeonCollection />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
