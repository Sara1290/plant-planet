import { devToolsEnhancer } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux';
import userReducer from '../redux/userReducer';
import recipeReducer from '../redux/recipeReducer';

const rootReducer = combineReducers({
    userReducer,
    recipeReducer
})


export default createStore(rootReducer, devToolsEnhancer());