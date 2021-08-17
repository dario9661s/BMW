import { ActionActive} from "../actions"
import {ActionType} from "../action-types/index"

const initialState = {}


const reducer = (state: any = initialState, action: ActionActive) => {
    switch(action.type) {
        case ActionType.SET_ACTIVE:
            return {
                ...state,
                active:  action.payload
            }
        default:
            return state
    } 
}

export default reducer