import React from 'react'

const Recipes = (props) => {
    console.log(props.recipes.recipes)
    
    return (
        props.recipes.recipes
        ? <div className="Recipe">
            <div className="recipe-header">Recipes</div>
                {props.recipes.recipes.map(recipe => 
                <React.Fragment key={recipe.id}>
                    <h2 className="recipe-title">{recipe.title}</h2>
                    <p className="recipe-ing"> <strong className="recipe-cat">Ingredients: </strong>{recipe.ingredients} </p> 
                    <p className="recipe-ins"> <strong className="recipe-cat">Instructions: </strong>{recipe.instructions} </p> 
                </React.Fragment>
            )}
        </div>
        : <h3>.....Still Loading.....</h3>
    )
}

export default Recipes