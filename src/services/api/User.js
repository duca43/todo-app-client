import HttpBaseClient from "../HttpBaseClient";

const ENDPOINTS = {
  REGISTRATION: "/users/"
};

class UserService extends HttpBaseClient {
  registration = registrationData => {
    return this.getApiClient().post(ENDPOINTS.REGISTRATION, registrationData);
  };
}

export default new UserService();