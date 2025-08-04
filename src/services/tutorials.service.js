import axios from "axios";

const tutorialService = {
  create(data) {
    return axios.post("http://localhost:3001/tutorials", data);
  }
};

export default tutorialService;


