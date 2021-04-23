import React,{useReducer} from 'react';
import axios from 'axios';
import ContactContext from './Contactcontext';
import contactreducer from './contactreducer';
import { 
    CREATE_CONTACT,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT ,
    FILTER_CONTACT,
    CLEAR_CONTACT,
    CLEAR_FILTER,
    CLEAR_CURRENT, 
    SET_CURRENT  } from '../types/types';
import { url } from '../../config/config';


  

const ContactState=(props)=>{

 const initialState={
    contacts:[
    //      {
    //      id:1,
    //      name:"Jack",
    //      email:"Jack@gmail.com",
    //      phone:"123-456-789",
    //      type:"Personal"
    //  },
    // {
    //     id:2,
    //     name:"Pack",
    //     email:"Pack@gmail.com",
    //     phone:"153-476-689",
    //     type:"Professional"  
    // }
],
current:null,
filtered:null
 }

 const [state,dispatch]=useReducer(contactreducer,initialState);


 //ADD_CONTACT
 const addcontact=async()=>{
    // contact.id=uuidv4();
    const config={
        headers:{
            'Accept':'application/json'
        },
        credentials: 'same-origin'
    }

    try {
        console.log('Hiitng Get All Contacts')
        const res= await axios.get(`${url}/contact`,config);
        res.data.contacts.map((eachcontact)=>{
            dispatch({type:ADD_CONTACT,payload:eachcontact});
        });
    } catch (error) {
        console.log(error.message);
    }
    
 }

 //CREATE_CONTACT
const createContact=async(contact)=>{
    
    const config={
        headers:{
            'Accept':'application/json'
        },
        credentials: 'same-origin'
    }

    try {
        console.log('Hiitng Get Create Contacts');
        const res=await axios.post(`${url}/contact`,contact,config);
       // console.log(res.data);
        if(res.data.success){
            addcontact();
            }  
    } 
    catch (error) {
        console.log(error.message);
    }
}

const editcontact=(contact)=>{
    
    dispatch({type:EDIT_CONTACT,payload:contact});
 }

 const updateContact=async(id,name,email,phone,type)=>{
    
    const contact={
        name,
        email,
        phone,
        type
    }

    const config={
        headers:{
            "Accept":"application/json"
        },
        credentials: 'same-origin'
    }

    try {
        const res=await axios.put(`${url}/contact/${id}`,contact,config);
        if(res.data.success) console.log("Contact Updated");
    } catch (error) {
        console.log(error.response.data.msg);
    }
      
 }

 //DELETE_CONTACT
 const deletecontact=async(id)=>{
    const config={
        headers:{
            "Accept":"application/json"
        },
        credentials: 'same-origin'
    }

    try {
        const res=await axios.delete(`${url}/contact/${id}`,config);
        if(res.data.success) console.log("Contact Deleted");
    } catch (error) {
        console.log(error.response.data.msg);
    }
    // dispatch({type:DELETE_CONTACT,payload:id})
 }
 //FILTER_CONTACT
 const filtercontact=(text)=>{
    dispatch({type:FILTER_CONTACT,payload:text});
 }

 //CLEAR_FILTER
 const clearfilter=()=>{
     dispatch({type:CLEAR_FILTER});
 }

 //CLEAR_CONTACT
 const clearContact=()=>{
    dispatch({type:CLEAR_CONTACT});
 }

 //SET_CURRENT
 const setcurrent=(contact)=>{
    dispatch({type:SET_CURRENT,payload:contact});
 }
 //CLEAR_CURRENT
 const clearcurrent=()=>{
    dispatch({type:CLEAR_CURRENT});
 }

    return(
        <ContactContext.Provider value={{
           contacts:state.contacts,
           current:state.current,
           filtered:state.filtered,
           createContact,
           addcontact,
           updateContact,
           deletecontact,
           editcontact,
           clearContact,
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