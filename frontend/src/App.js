import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CreatePost from "./Pages/CreatePost";
import Posts from "./Pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/create" element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;