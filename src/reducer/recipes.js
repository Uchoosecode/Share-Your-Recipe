export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_RECIPES":
            return action.recipes

        case "ADD_RECIPE":
            return action.recipe

        default:
            return state
    }
}