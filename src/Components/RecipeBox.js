import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savedRecipes } from "../redux/recipeReducer";
import Nav from "./Nav/Nav";
import "./RecipeBox.scss";


const RecipeBox = (props) => {
  const { saved } = useSelector((state) => state.recipeReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { id } = user;

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/saved/${id}`)
        .then((res) => {
          dispatch(savedRecipes(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch, id]);
  console.log(saved);

  let mappedRecipes = saved.map((recipes) => {
    return (
      <div className="recipe-container">
        <Link to={`/recipe/${recipes.plant_recipes_id}`}>
        <img src={recipes.img} alt={recipes.title} className="recipe-images" />
        </Link>
        <span className="recipe-details">
          <p>{recipes.title}</p>
          <p>{recipes.timeframe}</p>
        </span>
      </div>
    );
  });

  return (
    <div className="recipe-box-body">
      <div className="recipe-box-container">
        <h1>Your Recipe Box</h1>
        <Nav />
        <div className="outer-recipe-container">{mappedRecipes}</div>
      </div>
    </div>
  );
};

export default RecipeBox;
