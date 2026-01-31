import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducers/dataReducers";
import settingsReducer from "./reducers/settingsReducer";


//combine mutliple reducers
const rootReducer = combineReducers({
    dataReducer:dataReducer,
    settings:settingsReducer
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>