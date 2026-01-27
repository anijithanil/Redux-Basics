import { createStore } from "redux";
import { dataReducer } from "./reducers/dataReducers";

const store = createStore(dataReducer)

export default store
