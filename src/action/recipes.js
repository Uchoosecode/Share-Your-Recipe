
export const fetchRecipes = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_RECIPES" });
        fetch("http://localhost:3000/api/v1/recipes")
        .then(res => { return res.json()})
        .then(recipesJSON => {
            if (recipesJSON.error) {
                alert(recipesJSON.error)
            }
            else {
                dispatch({ type: 'LOAD_RECIPES', recipes: recipesJSON })}
            })
        }
    }

export const createRecipe = (recipe) => {
    return (dispatch) => {
       fetch('http://localhost:3000/api/v1/chefs/:chef_id/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(res => {return res.json()})
        .then(newRecipe => {
    
            if (newRecipe.error) {
                console.log(newRecipe.error)
                alert(newRecipe.error)
            }
            else {
                dispatch({ type: 'ADD_RECIPE', recipes: newRecipe})
            }
            return newRecipe
        }
            
        )}
}