import { Dispatch } from "react"
import { ReducerTypes } from "../constants"
import { Action } from "../reducers/bankingReducer"


export const withdraw = (amount:number) => {
  return {
      type: ReducerTypes.Withdraw,
      payload:amount
    }
}

export const deposit = (amount:number) => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ReducerTypes.Deposit,
      payload:amount
    })
  }
}

export const bankrupt = () => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ReducerTypes.Bankrupt
    })
  }
}