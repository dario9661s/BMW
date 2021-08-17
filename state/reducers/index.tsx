import {combineReducers} from "redux";
import productReducer from "../reducers/setProductsReducer"
import activeReducer from "../reducers/setActive"


const reducers = combineReducers({
    products: productReducer,
    active: activeReducer
})

export default reducers

export type State = ReturnType<typeof reducers>