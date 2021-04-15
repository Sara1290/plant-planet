//as soon as the user logs in they're taken to their dashboard
//they should see the nav bar on the left. 
//they should see a search bar at the top.
//immediatly on loading the user needs to see all the recipes ==> so useEffect to /api/recipes (get all recipes)
import React from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';
import Nav from './Nav/Nav';
import './Dash.css'

const Dash = (props) => {
    const [dashRecipes, setDashRecipes] = useState([])

    useEffect(() => {
        axios 
            .get("/api/recipes")
            .then((res) => {
                setDashRecipes(res.data)
            })
            }, [])


    let mappedRecipes = dashRecipes.map((recipes) => {
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
        <div className="dash-body">
            <Nav />
            <input className="search-input" />
            <button className="search-button">{<img className="mag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9tux7y5PJ-BmGwqhGCjI1i2wan-ZzanLkg&usqp=CAU"/>}</button>
            {mappedRecipes}
        </div>
    )
}
export default Dash;