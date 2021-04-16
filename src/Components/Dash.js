//as soon as the user logs in they're taken to their dashboard
//they should see the nav bar on the left. 
//they should see a search bar at the top.
//immediatly on loading the user needs to see all the recipes ==> so useEffect to /api/recipes (get all recipes)
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react';
import Nav from './Nav/Nav';
import './Dash.css'

const Dash = (props) => {
    const [dashRecipes, setDashRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
        setSearch(e.target.value);
    }
    
    useEffect(() => {
        // axios.get("/api/recipes")
        const results = dashRecipes.filter(recipe =>
            recipe.title.includes(search)
            )
        setSearchResults(results);
    }, [search])

    useEffect(() => {
        axios 
            .get("/api/recipes")
            .then((res) => {
                setDashRecipes(res.data)
            }).catch(err => console.log(err))
            }, [])

    const addToRecipeBox = (plant_recipes_id) => {
        axios.post(`/api/save/${plant_recipes_id}`)

    }
   
    

    let mappedRecipes = dashRecipes.map((recipes) => {
        return (
            <div key={recipes.plant_recipes_id} className="recipe-container">
            <Link to={`/recipe/${recipes.plant_recipes_id}`}>    
            <img src={recipes.img} alt={recipes.title} className="recipe-images" />
            </Link>
            <button className="add-button" onClick={() => addToRecipeBox(recipes.plant_recipes_id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            <span className="recipe-details">
            <p>{recipes.title}</p>
            {/* <p className="recipe-servings">{recipes.servings}</p> */}
            <p>{recipes.timeframe}</p>
            </span>
            </div>
        )
    })
    
    let mappedSearch = searchResults.map((recipes) => {
        return (
            <div key={recipes.plant_recipes_id} className="recipe-container">
            <Link to={`/recipe/${recipes.plant_recipes_id}`}>    
            <img src={recipes.img} alt={recipes.title} className="recipe-images" />
            </Link>
            <button className="add-button" onClick={() => addToRecipeBox(recipes.plant_recipes_id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
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
            <input className="search-input" type="text" placeholder="Search By Title" value={search} onChange={handleChange} />
            {/* <button className="search-button">{<img className="mag" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9tux7y5PJ-BmGwqhGCjI1i2wan-ZzanLkg&usqp=CAU"/>}</button> */}
            {searchResults.length < 1 
            ? mappedRecipes 
            : mappedSearch }
            {/* {mappedSearch} */}
            
        </div>
    )
}
export default Dash;