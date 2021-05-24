import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as FormReducer } from 'redux-form'
import _ from 'lodash'


export const logindetails=(state={}, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {token:action.payload, error:null, status:true}
        case 'LOGIN_FAILED':      
            return {token:null, error:action.payload, status:false}
        default:
            return state;
    }
}
export const employeeDetails=(state={}, action)=>{
    switch(action.type){
        case 'GET_EMPLOYEE' :
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case 'DELETE_EMPLOYEE' :
            return {..._.omit(state,action.payload)}
        default:
        return state;
    }
}
const cmb = combineReducers(
    {
        logindetails,
        employeeDetails,
        form: FormReducer
    }
)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const crst = createStore(cmb, composeEnhancer(applyMiddleware(thunk)));