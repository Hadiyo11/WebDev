import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-3b6i.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});