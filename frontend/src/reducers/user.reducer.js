import { DELETE_USER, GET_USER } from "../actions/user.actions";

const initialState ={}

export default function userReducer(state =initialState, action){
switch (action.type) {
    case GET_USER:
        return action.payload
        
        
    case DELETE_USER:
            return state.filter((user) =>user.id !== action.payload.uid)
    default:
        return state; 
       
}


}