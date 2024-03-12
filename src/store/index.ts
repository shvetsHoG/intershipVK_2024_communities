import {combineReducers, configureStore} from "@reduxjs/toolkit";
import GroupsReducer from "./slices/GroupsReducer.ts";

const rootReducer = combineReducers({
    groups: GroupsReducer
})
export const store = configureStore({
    reducer: rootReducer
})