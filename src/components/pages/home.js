import React,{Fragment, useContext, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import AddContact from '../contacts/addcontact';
import Contacts from '../contacts/contacts';
import FilterContact from '../contacts/filtercontact';
 import AuthContext from '../context/authcontext/Authcontext';
 import ContactContext from '../context/Contactcontext';

const Home=(props)=>{

   const { loadUser,isAuthenticated }=useContext(AuthContext);
   const { addcontact  }=useContext(ContactContext);

 

  useEffect(()=>{
    if(!isAuthenticated) props.history.push('/login'); 
    loadUser();
    if(isAuthenticated) addcontact();
  },[])

  return(
      <Fragment>
    <FilterContact />
     <div className="contact-page">
         <div className="contact-form-container">
             <AddContact />
        </div>
        
         <div className="list-contacts">
            <Contacts />
         </div>
     </div>
      </Fragment>
  )
}
export default withRouter(Home);