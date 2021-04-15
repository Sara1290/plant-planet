const initialState = {
    saved: []
}

const SAVED_RECIPES = 'SAVED_RECIPES'

export function savedRecipes(payload){
    return {
        type: SAVED_RECIPES,
        payload
    }
}

export default function reducer(state = initialState, action){
    const{type, payload} = action
    switch(type){
        case SAVED_RECIPES:
            return {
                ...state, 
                saved: payload
            }
            default: 
            return state
    }
}