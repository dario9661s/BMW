import {Action} from "../actions"
import {ActionType} from "../action-types/index"

const initialState = {}


const reducer = (state: any = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.SET_FRONT:
            return {
                ...state,
                frontBumperUpgrades: action.payload.frontBumpers,
                backBumperUpgrades : action.payload.backBumpers,
                steeringWheelsUpgrades: action.payload.steeringWheels,
                computer: action.payload.computer,
                wheels:  action.payload.wheels
            }
        default:
            return state
    } 
}

export default reducer