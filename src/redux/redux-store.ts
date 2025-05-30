import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools());