export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_CHEFS":
            return action.chefs
        
        case "ADD_CHEF":
            return state.concat(action.chef)    
    
        default:
            return state
    }
}