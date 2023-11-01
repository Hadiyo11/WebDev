import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-h76p.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});