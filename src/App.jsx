import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import BeautySection from "./components/BeautySection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
