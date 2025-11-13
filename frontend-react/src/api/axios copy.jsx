


import axios from "axios";

axios.defaults.withCredentials = true;

export const login = async (formData) => {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  });

  await axios.post("http://localhost:8000/login", formData, {
    withCredentials: true,
  });
};

