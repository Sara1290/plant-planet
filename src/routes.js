import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth';
import Dash from './Components/Dash';
import Form from './Components/Form';
import Recipe from './Components/Recipe';
import Saved from './Components/Saved';

export default (
    <Switch>
        <Route exact path = "/" component = { Auth } />
        <Route path = "/dash" component = { Dash } />
        <Route path = "/form" component = { Form } />
        <Route path = "/recipe" component = { Recipe } />
        <Route path = "/saved" component = { Saved } />
    </Switch>
)