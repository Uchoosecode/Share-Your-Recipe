import { combineReducers } from "redux";
import chefs from './chefs'
import recipes from './recipes'

export default combineReducers({
    chefs,
    recipes
})