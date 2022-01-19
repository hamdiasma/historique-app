import { combineReducers } from 'redux'
import auth from "./auth"
import notify from "./notify"

export default combineReducers({
    auth,
    notify
}) 