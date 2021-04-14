// import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux';
import userReducer from '../redux/userReducer';



export default createStore(userReducer) //devToolsEnhancer()//