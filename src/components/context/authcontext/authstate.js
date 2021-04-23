import React,{ useReducer } from 'react';
import AuthContext  from '../authcontext/Authcontext';
import authreducer from '../authcontext/authreducer';
import axios from 'axios';
import { url }from '../../../config/config';
import { settingUpGlobalHeader }from '../../utils/utils';
import{ REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER, 
    AUTH_ERROR, 
    LOGOUT} from '../../types/types';


const AuthState=(props)=>{

const initialState={
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:null,
    loading:true,
    error:null
}

const [state,dispatch]= useReducer(authreducer,initialState);

const Test=()=>{
    console.log("Called from AuthState Test");
}

//Register User
const registeruser=async(userformdata)=>{
    const config={
        headers:{
            'Accept':'application/json'
        },
        credentials: 'same-origin'
    }
    try {
        const res=await axios.post(`${url}/signup`,userformdata,config);
       if(res) console.log(res.data);
        dispatch({type:REGISTER_SUCCESS,payload:res.data});
    } catch (error) {
        console.log(error.message);
        console.log(error.response.data.msg);
        dispatch({type:REGISTER_FAIL,payload:error.response.data.msg})
    }
}


//Load User
 const loadUser=async()=>{

    const config={
        headers:{
            'Accept':'application/json'
        },
        credentials: 'same-origin'
    }
    if(localStorage.token) settingUpGlobalHeader(localStorage.token);

    try {
        const res=await axios.get(`${url}/auth`,config);
       if(res) console.log(res.data);
        dispatch({type:LOAD_USER,payload:res.data});
    } catch (error) {
        console.log(error.message);
        dispatch({type:AUTH_ERROR,payload:error.response.data.msg})
    }

 }

 //LOGIN_USER
 const loginUser=async(user)=>{
    const config={
        headers:{
            'Accept':'application/json'
        },
        credentials: 'same-origin'
    }

 try {
    const res=await axios.post(`${url}/auth`,user,config);
    dispatch({type:LOGIN_SUCCESS,payload:res.data});
 } 
 catch (error) {
     console.log(error.response.data);
     dispatch({type:LOGIN_FAIL,payload:error.response.data.msg});
 } 
 }

 const logOut=()=>{
     dispatch({type:LOGOUT});
 }
 
 

return(
    <AuthContext.Provider
    value={
    {
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        user:state.user,
        loading:state.loading,
        error:state.error,
        registeruser,
        loadUser,
        loginUser,
        logOut,
        Test
    }
    }
    >
        {props.children}
    </AuthContext.Provider>
);


}//AuthState

export default AuthState