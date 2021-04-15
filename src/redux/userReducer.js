const initialState = {
    username: "",
    email: "",
    prof_pic: ""
}


//action types 
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'


//action creators //there is no axios request in these otherwise and if i do use an axios request i 
//will need that promise middlware so i can use fulfilled or pending or rejected etc.
export function registerUser(user) {
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function loginUser(user){
    console.log(user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user 
    }
}

//reducer function
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
                // email: action.payload.email,
            }
        case LOGOUT_USER:
            return initialState;
        case GET_USER:
            return {
                ...state,
                user: action.payload
                // username: action.payload.username,
                // prof_pic: action.payload.prof_pic
            }
        default: return state
    }
        
}
