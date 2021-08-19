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

interface setUpgrade  {
    type: ActionType.SET_UPGRADE 
    payload: string
}

export type ActionActive = setActive

export type Action = Getproducts

export type ActionUpgrade = setUpgrade