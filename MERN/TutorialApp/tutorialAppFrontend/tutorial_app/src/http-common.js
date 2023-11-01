import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-app-heui.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});