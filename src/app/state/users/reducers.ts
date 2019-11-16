import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { login, loginSuccess, loginFailure} from '../actions'
import { User } from '../model';

export interface authState {
    isAuthenticated:boolean;
    user: User;
    errorMessage:string
  }
  
export const initialState: authState = {
    user:null,
    isAuthenticated:false,
    errorMessage:''
  };
const userActions = createReducer(
    initialState,
    on(loginSuccess,(state,action)=>({...state,user:action.payload,isAuthenticated:true,errorMessage:''})),
    on(loginFailure,(state)=>({...state,errorMessage:'Invalid Credentials',isAuthenticated:false,user:null}))

) 
export const selectAuthState = createFeatureSelector<authState>(
  'auth'
  ); 
export function reducer(state: authState | undefined, action: Action) {
    return userActions(state, action);
  }