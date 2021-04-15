//display a recipe here a fullll page view.
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';

const Recipe = (props) => {
    const { id } = props.match.params
    console.log(id)
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        axios.get(`/api/recipe/${id}`)
        .then((res) => {
            console.log(res.data)
            setRecipe(res.data)
        })
        .catch(err => console.log(err))
    }, [id])
console.log(recipe)

    // const recipeMap = recipe.params.map((recipe) => {
    //     console.log(recipe.params)
    //     return (
    //         <div>
    //         <img src={recipe.img} alt={recipe.title} className="recipe-images" />
    //         <span className="recipe-details">
    //         <p>{recipe.title}</p>
    //         <p className="recipe-servings">{recipe.servings}</p>
    //         <p>{recipe.timeframe}</p>
    //         </span>
    //         </div>
    //     )
    // })

    return (
        <div>
            <Nav />
            <h1>{recipe.title}</h1>
            {/* {recipeMap} */}
        </div>
    )

}
export default Recipe;