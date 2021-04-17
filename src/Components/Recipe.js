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

const addToRecipeBox = (plant_recipes_id) => {
    axios.post(`/api/save/${plant_recipes_id}`)

}

    return (
        <div>
            <Nav />
            <button className="add-button" onClick={() => addToRecipeBox(id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            <h1>{recipe.title}</h1>
            <img alt="" src={recipe.img} />
            <p>{recipe.timeframe}</p>
            <p>{recipe.servings}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.method}</p>
            {/* {recipeMap} */}
        </div>
    )

}
export default Recipe;