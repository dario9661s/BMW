import {ActionType} from "../action-types/index"

interface Getproducts  {
    type: ActionType.SET_FRONT 
    payload: {
        frontBumpers: {},
        backBumpers: {},
        steeringWheels: {},
        computer: {},
        wheels:{}
    }
}


interface setActive  {
    type: ActionType.SET_ACTIVE 
    payload: {
    }
}

export type ActionActive = setActive

export type Action = Getproducts