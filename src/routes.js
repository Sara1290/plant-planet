import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth';
import Dash from './Components/Dash';
import Form from './Components/Form';
import EditForm from './Components/EditForm'
import Recipe from './Components/Recipe';
import RecipeBox from './Components/RecipeBox';

export default (
    <Switch>
        <Route exact path = "/" component = { Auth } />
        <Route path = "/dash" component = { Dash } />
        <Route path = "/form" component = { Form } />
        <Route path = "/editForm" component = { EditForm } />
        <Route path = "/recipe/:id" component = { Recipe } />
        <Route path = "/recipeBox" component = { RecipeBox } />
    </Switch>
)