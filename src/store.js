import { legacy_createStore as createStore } from "redux";
// import rootReducer from "./reducers";
import rootReducer from "./reducer/rootReducer";
const store = createStore(rootReducer);
export default store;