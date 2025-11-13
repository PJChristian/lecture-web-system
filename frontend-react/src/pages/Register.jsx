import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { register } from "../api/auth";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    try {
      const response = await register(formData);
      setMessage(response.data.message);
      navigate("/login");   
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full px-3 py-2 mb-3"
          required
        />

        <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`border border-gray-300 rounded w-full px-3 py-2 mb-3
            ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 text-left">
            {errors.email[0]}
          </p>
        )}
      </div>

        <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={`border border-gray-300 rounded w-full px-3 py-2 mb-3
            ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Password"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600 text-left">{errors.password[0]}</p>
        )}
      </div>

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full px-3 py-2 mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </form>
    </div>
  );
};
