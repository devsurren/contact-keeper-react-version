import React,{useContext,Fragment} from 'react';
import ContactContext from '../context/Contactcontext'
import ContactItem from './contactitem';
//import Fade from 'react-reveal/Fade';
//import Test from '../test';

const Contacts=()=>{
    const contactContext=useContext( ContactContext );
    
    const{contacts,filtered}=contactContext;
    
    if(contacts.length===0) return <h1> Please add some contacts...</h1>

    const contactshowup=(eachcontact)=>{
        return(
                <ContactItem key={eachcontact.id} contact={eachcontact} />
        )
    }
 return(
  <Fragment>
       {
           filtered!==null?filtered.map((eachcontact)=>contactshowup(eachcontact) 
           ):contacts.map( (eachcontact)=>contactshowup(eachcontact) )
        }
       
  </Fragment>
 );
}

export default Contacts;


