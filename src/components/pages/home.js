import React,{Fragment} from 'react';
import AddContact from '../contacts/addcontact';
import Contacts from '../contacts/contacts';

const Home=()=>{
  return(
      <Fragment>
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
export default Home;