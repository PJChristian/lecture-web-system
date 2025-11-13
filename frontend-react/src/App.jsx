import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CarForm from "./pages/CarForm";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cars from "./pages/CarListing";
import api from "./api/axios";

const App = () => {
  useEffect(() => {
    api.get('/sanctum/csrf-cookie').catch(() => {});
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-20 pb-16 md:pt-0 md:pb-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-form" element={<CarForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
