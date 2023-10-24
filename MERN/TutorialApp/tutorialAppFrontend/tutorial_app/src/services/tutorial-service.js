import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://tutorial-app-3vx8.onrender.com/tutorials");
  }

  get(id) {
    return http.get(`https://tutorial-app-3vx8.onrender.com/tutorials/${id}`);
  }

  create(data) {
    return http.post("https://tutorial-app-3vx8.onrender.com/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://tutorial-app-3vx8.onrender.com/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://tutorial-app-3vx8.onrender.com/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`https://tutorial-app-3vx8.onrender.com/tutorials`);
}

findByTitle(title) {
  return http.get(`https://tutorial-app-3vx8.onrender.com/tutorials?title=${title}`);
}
}

export default new TutorialDataService();