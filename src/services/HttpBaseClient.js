import axios from "axios";
import { API_BASE_URL } from "../constants/api";

class HttpBaseClient {

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL
    });
  }

  getApiClient = () => {
    return this.client;
  }
}

export default HttpBaseClient;
