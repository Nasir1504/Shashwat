import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import LanguageLearning from "./pages/lang-learning/LanguageLearning";
import JobPlacement from "./pages/job-placement/JobPlacement";
import ConsultancySolution from "./pages/cons-solution/ConsultancySolution";

const App = () => {
  let mediaQuery = window.matchMedia(`(max-width: 680px)`);
  const [query, setQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = () => {
      setQuery(mediaQuery.matches);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [mediaQuery]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route
          path="/course-details"
          element={<CourseDetails query={query} />}
        />
        <Route
          path="/language-learning"
          element={<LanguageLearning query={query} />}
        />
        <Route path="/job-placement" element={<JobPlacement query={query} />} />
        <Route
          path="/consultancy-solution"
          element={<ConsultancySolution query={query} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
