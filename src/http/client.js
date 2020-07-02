import axios from "axios";
const API_URL = "http://localhost:8000";

export default axios.create({
  baseURL: API_URL,
});
