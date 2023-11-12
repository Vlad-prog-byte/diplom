import { RootState } from "../../../store";

export const getAuthUsername = (state: RootState) => state.auth.username;
export const getAuthPassword = (state: RootState) => state.auth.password;
