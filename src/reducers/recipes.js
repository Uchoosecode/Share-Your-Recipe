const recipes = (state = { recipes: [], loading: false}, action) => {
    switch(action.type) {
        case "LOAD_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes],
                loading: true
            }
        case "ADD_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }
        default:
            return state
    }
}

export default recipes;