import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-uaok.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});