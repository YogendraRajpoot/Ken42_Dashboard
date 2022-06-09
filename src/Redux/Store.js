import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { studentReducer } from "./Student/reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer
})
// const Middleware = (store) => (next) => (action) => {
//   // console.log("Middleware", action, next, store);
//   return typeof action === "function" ? action(store.dispatch) : next(action)
// }
export const store = createStore(rootReducer, applyMiddleware(thunk));
