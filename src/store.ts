import { combineReducers, createStore, applyMiddleware } from 'redux';
import { hooksReducer } from "./hooks/hooks-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    hooks: hooksReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));