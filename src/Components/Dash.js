import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './Nav/Nav';
//as soon as the user logs in they're taken to their dashboard
//they should see the nav bar on the left. 
//they should see a search bar at the top.
//immediatly on loading the user needs to see all the recipes ==> so useEffect to /api/recipes (get all recipes)

const Dash = () => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("/api/recipes")
        // .then((res) => {
        //   getAllRecipes(res.data)
        //   console.log(res.data)
        // })
      }, [])
    
    const searchAllRecipes = () => {
        //useEffect to use /api/recipes (the search functionality is in the handler..)
    }

    return(
        <div>
            <Nav />
            <input />
            <button onClick={searchAllRecipes}>Search</button>
        </div>
    )

}
export default Dash;