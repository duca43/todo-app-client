import { REGISTRATION, LOGIN, PUT_LOGGED_USER, LOGOUT } from "./constants";

export const registerUser = (payload) => ({
    type: REGISTRATION,
    payload
});

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const logout = (payload) => ({
    type: LOGOUT,
    payload
});

export const putLoggedUser = (payload) => ({
    type: PUT_LOGGED_USER,
    payload
});