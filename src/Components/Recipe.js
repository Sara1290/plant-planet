//display a recipe here a fullll page view.
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import './Recipe.scss'

const Recipe = (props) => {
    const { id } = props.match.params
    //yes, this is actually logging the recipe id below. cool. 
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
//logs the details of the recipe object.
console.log(recipe)

const addToRecipeBox = (plant_recipes_id) => {
    axios.post(`/api/save/${plant_recipes_id}`)

}

    return (
        <div>
            <Nav />
            <h1>{recipe.title}</h1>
            <img className="single-recipe-img" alt="" src={recipe.img} />
            <div className="button-container">
            <Link to={`/editForm/${id}`} >
            <button className="edit-button">Edit</button>
            </Link>
            <button className="add-button" onClick={() => addToRecipeBox(id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            </div>
            <div className="details-container">
            <p className="recipe-deets">{recipe.timeframe}</p>
            <p className="recipe-deets">{recipe.servings}</p>
            <p className="recipe-deets">{recipe.ingredients}</p>
            <p className="recipe-deets">{recipe.method}</p>
            </div>
            {/* {recipeMap} */}
        </div>
    )

}
export default Recipe;