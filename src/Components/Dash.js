//as soon as the user logs in they're taken to their dashboard
//they should see the nav bar on the left. 
//they should see a search bar at the top.
//immediatly on loading the user needs to see all the recipes ==> so useEffect to /api/recipes (get all recipes)
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import {getUser} from '../redux/userReducer'
import Nav from './Nav/Nav';
import './Dash.scss'

const Dash = (props) => {
    const [dashRecipes, setDashRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { username } = useSelector((state) => state.userReducer)

    const handleChange = e => {
        setSearch(e.target.value);
    }
    //search 
    useEffect(() => {
        // axios.get("/api/recipes")
        const results = dashRecipes.filter(recipe =>
            recipe.title.includes(search)
            )
        setSearchResults(results);
    }, [search]) //if i add dashRecipes the dap. array then ..the delete button goes away.. and it's dependent on a recipe author_username matching a logged in username... but in the console i'm seeing a user logged in.

    //show all the recipes
    useEffect(() => {
        getRecipes()

    }, [])

    const getRecipes = () => {
        axios 
            .get("/api/recipes")
            .then((res) => {
                setDashRecipes(res.data)
            }).catch(err => console.log(err))
    }

    //save to the Recipe Box
    const addToRecipeBox = (plant_recipes_id) => {
        axios.post(`/api/save/${plant_recipes_id}`)

    }
   
    //logged in user can delete their submitted recipe
    const deleteRecipe = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then(() => {
            getRecipes()
        })
    }

    //map over all the recipes
    let mappedRecipes = dashRecipes.map((recipes) => {
        return (
            <div key={recipes.plant_recipes_id} className="recipe-container">
            <Link to={`/recipe/${recipes.plant_recipes_id}`}>    
            <img src={recipes.img} alt={recipes.title} className="recipe-images" />
            </Link>
            {
                recipes.author_username === username
                ? <button onClick={() => deleteRecipe(recipes.plant_recipes_id)}>Delete Your Recipe</button>
                : null
            }
            <button className="add-button" onClick={() => addToRecipeBox(recipes.plant_recipes_id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            <span className="recipe-details">
            <p>{recipes.title}</p>
            {/* <p className="recipe-servings">{recipes.servings}</p> */}
            <p>{recipes.timeframe}</p>
            </span>
            </div>
            
        )
    })
    console.log(dashRecipes)
    

    //map over the recipes that match search results
    let mappedSearch = searchResults.map((recipes) => {
        return (

            <div className="recipe-container">
            <Link to={`/recipe/${recipes.plant_recipes_id}`}>    
            <img src={recipes.img} alt={recipes.title} className="recipe-images" />
            </Link>
            {}
            <button className="add-button" onClick={() => addToRecipeBox(recipes.plant_recipes_id)} >{<img alt="" className="add-button-img" src="https://www.clipartkey.com/mpngs/m/50-505406_plus-sign-icon-button-green-approved-check-add.png" />}</button>
            <span className="recipe-details">
            <p>{recipes.title}</p>
            {/* <p className="recipe-servings">{recipes.servings}</p> */}
            <p>{recipes.timeframe}</p>
            </span>
            </div>
        )
    })

    //the return for what's going to show up for the user.
    return (
        <div className="dash-body">
            <div className="welcome-search-container">
            <h1>Welcome Back,<br/> {username}! </h1>
            <input className="search-input" type="text" placeholder="Search By Title" value={search} onChange={handleChange} />
            </div>
            <Nav />
            <div className="outer-recipe-container">
            {searchResults.length < 1 
            ? mappedRecipes 
            : mappedSearch }
            </div>
            
        </div>
    )
}
export default Dash;