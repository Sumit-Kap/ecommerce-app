import { ReducerTypes } from "../constants"

export type InitialState = {
  counter: number;
}
const initialState = {
  counter: 0
}
export type Action = {type:ReducerTypes.Deposit, payload: number} | {type: ReducerTypes.Bankrupt} | {type: ReducerTypes.Withdraw, payload:number}
// export type ActionType = typeof Action
export const bankingReducer = (state=initialState, action:Action) => {
  switch(action.type){
    case ReducerTypes.Deposit:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case ReducerTypes.Bankrupt:
        return {
          ...state,
          counter: 0
        }
    case ReducerTypes.Withdraw:
        return {
          ...state,
          counter: state.counter - action.payload
        }
    default:
      return state;
  }
}