import { ActionType } from "../action-types";
import {Dispatch} from "redux";
import {Action, ActionActive, ActionUpgrade} from "../actions/index";

export const setFront = (amount: {frontBumpers: {}, backBumpers:{}, steeringWheels: {}, wheels:{}, computer:{}}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_FRONT,
            payload: amount
        })
    }
}

export const setActive = (amount: {}) => {
    return (dispatch: Dispatch<ActionActive>) => {
        dispatch({
            type: ActionType.SET_ACTIVE,
            payload: amount
        })
    }
}

export const setUpgrade = (amount: string) => {
    return (dispatch: Dispatch<ActionUpgrade>) => {
        dispatch({
            type: ActionType.SET_UPGRADE,
            payload: amount
        })
    }
}