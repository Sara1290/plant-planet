import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from './Nav/Nav';


const RecipeBox = (props) => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        axios.get("/api/saved/:id")
        .then((res) => {
            setSavedRecipes(res.data)
        })
    }, [])

    let mappedRecipes = savedRecipes.map((recipes) => {
        return (
            <div key={recipes.plant_recipes_id} className="recipe-container">
            <img src={recipes.img} alt={recipes.title} className="recipe-images" />
            <span className="recipe-details">
            <p>{recipes.title}</p>
            {/* <p className="recipe-servings">{recipes.servings}</p> */}
            <p>{recipes.timeframe}</p>
            </span>
            </div>
        )
    })

    return (
        <div>
        <Nav />
        <h1>Your Recipe Box</h1>
        {mappedRecipes}
        </div>
    )

}

export default RecipeBox