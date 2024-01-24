import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import AddFood from "./pages/AddFood";
import CreateMeal from "./pages/CreateMeal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/create-meal" element={<CreateMeal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
