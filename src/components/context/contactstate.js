import React,{useReducer} from 'react';
import ContactContext from './Contactcontext';
import contactreducer from './contactreducer';
import { ADD_CONTACT  } from '../types/contacttypes';
import {v4 as uuidv4} from 'uuid';

const ContactState=(props)=>{

 const initialState={
     contacts:[
         {
         id:uuidv4(),
         name:"Jack",
         email:"Jack@gmail.com",
         phone:"123-456-789",
         type:"Personal"
     },
    {
        id:uuidv4(),
        name:"Pack",
        email:"Pack@gmail.com",
        phone:"153-476-689",
        type:"Professional"  
    }
]
 }

 const [state,dispatch]=useReducer(contactreducer,initialState);

 //ADD_CONTACT
 const addcontact=(contacts)=>{
    dispatch({type:ADD_CONTACT,payload:contacts});
 }

    return(
        <ContactContext.Provider value={{
           allcontacts:state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;