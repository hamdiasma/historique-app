import { combineReducers } from 'redux'
import auth from "./auth"
import notify from "./notify"
import theme from "./theme"
import products from "./product"
import histor from "./historiques"

export default combineReducers({
    auth,
    notify,
    theme,
    products,
    histor
}) 