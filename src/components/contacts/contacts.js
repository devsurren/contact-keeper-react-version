import React,{useContext,Fragment} from 'react';
import ContactContext from '../context/Contactcontext'
import ContactItem from './contactitem';
//import Fade from 'react-reveal/Fade';
//import Test from '../test';

const Contacts=()=>{
  
    const contactContext=useContext( ContactContext );
    
    const{contacts,filtered}=contactContext;
    
    console.log(contacts);

    if(!contacts.length) return <h1> Please add some contacts...</h1>

    const contactshowup=(eachcontact)=>{
        return(
                <ContactItem key={eachcontact._id} contact={eachcontact} />
        )
    }
 return(
  <Fragment>
        {
           filtered!==null?filtered.map((eachcontact)=> <ContactItem key={eachcontact.email} contact={eachcontact} />
           ):contacts.map( (eachcontact)=>  <ContactItem key={eachcontact.email} contact={eachcontact} /> )
        } 

  </Fragment>
 );
}

export default Contacts;


