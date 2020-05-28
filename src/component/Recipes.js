import React from 'react'

const Recipes = (props) => {
    console.log(props.recipes.recipes)
    return (
        <div className="Recipe">
            <div className="recipe-header">Recipes</div>
                {props.recipes.recipes.map(recipe => 
                <ul key={recipe.id}>
                    <h2 className="recipe-title">{recipe.title}</h2>
                    <p className="recipe-ing"> <strong className="recipe-cat">Ingredients: </strong>{recipe.ingredients} </p> 
                    <p className="recipe-ins"> <strong className="recipe-cat">Instructions: </strong>{recipe.instructions} </p> 
                </ul>
            )}
        </div>
    )
}

export default Recipes