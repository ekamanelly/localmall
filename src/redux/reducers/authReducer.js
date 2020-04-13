import {LOGIN_SUCCESS, LOGIN_FAILURE, ADD_PROFILE, REMOVE_PROFILE} from '../actions/actionType';


const initialState = {
    isAuthenticated: false,
    userProfile : null
}

export default function (state = initialState, action) {
    switch(action.type) { 
        case LOGIN_SUCCESS:  
        // console.log(action.payload)      
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            }   
            case ADD_PROFILE:       
            return {
                ...state,
                userProfile: action.payload.profile,
            };
        case REMOVE_PROFILE:
            return {
                ...state,
               userProfile:null
            }   
        default:
            return state;
    }
}