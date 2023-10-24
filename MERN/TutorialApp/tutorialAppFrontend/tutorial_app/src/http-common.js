import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-3vx8.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});