import axios from "axios";

export default axios.create({
  baseURL: "https://my-tutorial-app.onrender.com/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});