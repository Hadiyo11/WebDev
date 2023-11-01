import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-pijh.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});