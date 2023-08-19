
import { ADD_FAV, REMOVE_FAV } from "./action-type";

const initialState = {
    myFavorites: [],
    Character: []
}
function rootReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        default:
            return state
    }
}

export default rootReducer;