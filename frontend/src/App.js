import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ProcessFile from "./Pages/ProcessFile";
import FastAPI from "./Pages/FastAPI";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/fastAPI" element={<FastAPI/>} />
        <Route path="/processFile" element={<ProcessFile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;