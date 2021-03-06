//display a recipe here a fullll page view.
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import './Recipe.scss'

const Recipe = (props) => {
    const { id } = props.match.params 
    console.log(id)//confirm, this does show a recipe id
    const [recipe, setRecipe] = useState({})
    const { username } = useSelector((state) => state.userReducer)
    console.log(username) //confirm, we do see the logged in user's username

    useEffect(() => {
        axios.get(`/api/recipe/${id}`)
        .then((res) => {
            console.log(res.data)//confirm, does show recipe object
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
        <div className="recipe-body">
            <Nav />
            <div className="recipe-title">
            <h1>{recipe.title}</h1>
            </div>
            <img className="single-recipe-img" alt="" src={recipe.img} />
            <div className="button-container">
            {/* {recipe.author_username === username 
                ? <Link to={`/editForm/${id}`}>
                  <button className="edit-button">Edit</button>
                  </Link>
                : null} */}
            <Link to={`/editForm/${id}`}>
                <button className="edit-button">Edit</button>
            </Link>
            <button className="add-button" onClick={() => addToRecipeBox(id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            </div>
            <div className="details-container">
                <h3>Cook and Prep Time</h3>
            <p className="recipe-deets">{recipe.timeframe}</p>
                <h3>Servings</h3>
            <p className="recipe-deets">{recipe.servings}</p>
                <h3>Ingredients</h3>
            <p className="recipe-deets">{recipe.ingredients}</p>
                <h3>Method</h3>
            <p className="recipe-deets">{recipe.method}</p>
            </div>
            {/* {recipeMap} */}
        </div>
    )

}
export default Recipe;