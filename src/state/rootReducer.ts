import { combineReducers} from "redux";
import { bankingReducer } from "./reducers/bankingReducer";

const reducers =  combineReducers({
  banking: bankingReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;