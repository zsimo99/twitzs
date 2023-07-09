import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data) {
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};
const register = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  if (res.data) {
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = { login, register, logout };
export default authService;
