const reducer = "userReducer";

export const userDataSelector = state => state[reducer].userData;
export const loggedUsernameSelector = state => state[reducer].userLogged.username;
export const loggedUserIdSelector = state => state[reducer].userLogged.userId;
export const loggedTokenSelector = state => state[reducer].userLogged.token;