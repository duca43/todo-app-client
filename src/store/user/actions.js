import { REGISTRATION } from "./constants";

export const registerUser = (payload) => ({
    type: REGISTRATION,
    payload
});