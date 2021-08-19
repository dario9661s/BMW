import {Action, ActionActive, ActionUpgrade} from "../actions"
import {ActionType} from "../action-types/index"

const initialState = {}


const reducer = (state: any = initialState, action: Action | ActionActive | ActionUpgrade) => {
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
            case ActionType.SET_ACTIVE:
                return {
                    ...state,
                    active:  action.payload
                }
            case ActionType.SET_UPGRADE:
            return {
                ...state,
                upgrade:  action.payload
            }
        default:
            return state
    } 
}

export default reducer