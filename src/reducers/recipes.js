const recipes = (state = { recipes: [], loading: false}, action) => {

    switch(action.type) {
        case "LOADING_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes],
                loading: true
            }

        case "LOAD_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }

        case "ADD_RECIPE":           
            return {
                ...state,
                recipes: state.recipes.concat(action.recipes),
                loading: false
            }
            
        default:
            return state
    }
}

export default recipes;