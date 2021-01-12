import HttpBaseClient from "../HttpBaseClient";

const ENDPOINTS = {
  LOGIN: "/login/",
  REGISTRATION: "/users/",
  USER_DATA: "/users/me"
};

class UserService extends HttpBaseClient {
  registration = registrationData => {
    return this.getApiClient().post(ENDPOINTS.REGISTRATION, registrationData);
  };

  login = async credentials => {
    const { data } = await this.getApiClient().post(ENDPOINTS.LOGIN, credentials);
    localStorage.setItem('token', data.access);

    const response = await this.getUserData();
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('userId', response.data.id);

    const responseData = {
      username: response.data.username,
      id: response.data.id,
      token: data.access
    }

    return responseData;
  };

  getUserData = () => {
    return this.getApiClient().get(ENDPOINTS.USER_DATA);
  }
}

export default new UserService();