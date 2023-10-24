import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://my-tutorial-app.onrender.com/");
  }

  get(id) {
    return http.get(`https://my-tutorial-app.onrender.com/${id}`);
  }

  create(data) {
    return http.post("https://my-tutorial-app.onrender.com/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://my-tutorial-app.onrender.com/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://my-tutorial-app.onrender.com/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`https://my-tutorial-app.onrender.com/tutorials`);
}

findByTitle(title) {
  return http.get(`https://my-tutorial-app.onrender.com/tutorials?title=${title}`);
}
}

export default new TutorialDataService();