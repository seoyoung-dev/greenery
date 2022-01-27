import { combineReducers } from "redux";

const initialState = {
  isLogined: false,
  displayMode: "NOTICEBOARD",
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  defaultReducer,
});

export default rootReducer;
