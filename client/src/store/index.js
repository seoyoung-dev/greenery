import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools()); // 여러개 미들웨어 적용

export default store;
