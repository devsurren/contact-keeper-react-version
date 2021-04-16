import React,{useReducer} from 'react';
import AuthContext  from '../authcontext/Authcontext';
import authreducer from '../authcontext/authreducer';
import axios from 'axios';
import{REGISTER_SUCCESS,REGISTER_FAIL} from '../../types/types';
import {url}from '../../../config/config';

const AuthState=(props)=>{

const initialState={
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:null,
    loading:true,
    error:null
}

const [state,dispatch]= useReducer(authreducer,initialState);

//Register User

const registeruser=async(userformdata)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res=await axios.post(`${url}/api/v1/signup`,userformdata,config);
       if(res) console.log(res.data);
        dispatch({type:REGISTER_SUCCESS,payload:res.data});
    } catch (error) {
        console.log(error.message);
        console.log(error.response.data.msg);
        dispatch({type:REGISTER_FAIL,payload:error.response.data.msg})
    }
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
    }
    }
    >
        {props.children}
    </AuthContext.Provider>
);


}//AuthState

export default AuthState