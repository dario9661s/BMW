import { ActionType } from "../action-types";
import {Dispatch} from "redux";
import {Action, ActionActive} from "../actions/index";

export const setFront = (amount:any ) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_FRONT,
            payload: amount
        })
    }
}

export const setActive = (amount:any ) => {
    return (dispatch: Dispatch<ActionActive>) => {
        dispatch({
            type: ActionType.SET_ACTIVE,
            payload: amount
        })
    }
}