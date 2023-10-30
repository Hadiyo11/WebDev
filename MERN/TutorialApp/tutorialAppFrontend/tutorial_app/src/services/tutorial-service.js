import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://tutorial-app-scac.onrender.com");
  }

  get(id) {
    return http.get(`https://tutorial-app-scac.onrender.com/${id}`);
  }

  create(data) {
    return http.post("https://tutorial-app-scac.onrender.com/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://tutorial-app-scac.onrender.com/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://tutorial-app-scac.onrender.com/${id}`);
  }

  deleteAll() {
    return http.delete(`https://tutorial-app-scac.onrender.com/`);
}

findByTitle(title) {
  return http.get(`https://tutorial-app-scac.onrender.com/?title=${title}`);
}
}

export default new TutorialDataService();