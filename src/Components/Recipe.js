//display a recipe here a fullll page view.
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';

const Recipe = (props) => {
    const { id } = props.match.params
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        axios.get(`/api/recipe/${id}`)
        .then((res) => {
            setRecipe(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [id])
console.log(recipe)

    const recipeMap = recipe.params.map((recipe) => {
        console.log(recipe.params)
        return (
            <div>
            <img src={recipe.img} alt={recipe.title} className="recipe-images" />
            <span className="recipe-details">
            <p>{recipe.title}</p>
            <p className="recipe-servings">{recipe.servings}</p>
            <p>{recipe.timeframe}</p>
            </span>
            </div>
        )
    })

    return (
        <div>
            <Nav />
            {recipeMap}
        </div>
    )

}
export default Recipe;