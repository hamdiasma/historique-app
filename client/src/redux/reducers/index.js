import { combineReducers } from 'redux'
import auth from "./auth"
import notify from "./notify"
import theme from "./theme"

export default combineReducers({
    auth,
    notify,
    theme
}) 