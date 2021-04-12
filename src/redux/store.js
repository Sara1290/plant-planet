import { createStore } from 'redux';
import userReducer from '../redux/userReducer';



export default createStore(userReducer)