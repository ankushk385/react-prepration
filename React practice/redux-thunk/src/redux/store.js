import { createStore } from "redux";
import { userReducer } from "./userSlice";

export const store = createStore(userReducer);
