import React,{useReducer} from 'react';
import ContactContext from './Contactcontext';
import contactreducer from './contactreducer';
import { ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT ,
    FILTER_CONTACT,
    CLEAR_FILTER,
    CLEAR_CURRENT, 
    SET_CURRENT  } from '../types/types';
import {v4 as uuidv4} from 'uuid';

const ContactState=(props)=>{

 const initialState={
    contacts:[
         {
         id:1,
         name:"Jack",
         email:"Jack@gmail.com",
         phone:"123-456-789",
         type:"Personal"
     },
    {
        id:2,
        name:"Pack",
        email:"Pack@gmail.com",
        phone:"153-476-689",
        type:"Professional"  
    }
],
current:null,
filtered:null
 }

 const [state,dispatch]=useReducer(contactreducer,initialState);

 //ADD_CONTACT
 const addcontact=(contact)=>{
     contact.id=uuidv4();
    dispatch({type:ADD_CONTACT,payload:contact});
 }

 //DELETE_CONTACT
 const deletecontact=(id)=>{
     dispatch({type:DELETE_CONTACT,payload:id})
 }
 //FILTER_CONTACT
 const filtercontact=(text)=>{
    dispatch({type:FILTER_CONTACT,payload:text});
 }

 //CLEAR_FILTER
 const clearfilter=()=>{
     dispatch({type:CLEAR_FILTER});
 }

 //SET_CURRENT
 const setcurrent=(contact)=>{
    dispatch({type:SET_CURRENT,payload:contact});
 }
 //CLEAR_CURRENT
 const clearcurrent=()=>{
    dispatch({type:CLEAR_CURRENT});
 }

 const editcontact=(contact)=>{
    dispatch({type:EDIT_CONTACT,payload:contact});
 }

    return(
        <ContactContext.Provider value={{
           contacts:state.contacts,
           current:state.current,
           filtered:state.filtered,
           addcontact,
           deletecontact,
           editcontact,
           filtercontact,
           clearfilter,
           setcurrent,
           clearcurrent
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;