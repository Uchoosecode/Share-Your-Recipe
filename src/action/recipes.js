// one line action creators thanks to ES6

export const fetchRecipes = () => {
    return (dispatch) => {
        dispatch({ type: "LOAD_RECIPES" });
        fetch("http://localhost:3001/api/v1/recipes")
        .then(res => {
            return res.json()
        })
        .then(recipesJSON => {
            dispatch({ type: 'ADD_RECIPES', recipes: recipesJSON })
        })
    }
}

export const createRecipe = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "ADD_RECIPES"});
        fetch("http:localhost:3001/api/v1/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(res => {
            return res.json()
            })
        .then(newRecipe => {
            dispatch({ type: 'ADD_RECIPES', recipes: newRecipe})
        })
    }
}