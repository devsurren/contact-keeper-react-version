import React,{useContext,Fragment} from 'react';
import ContactContext from '../context/Contactcontext'


const Contacts=()=>{
    const contactContext=useContext( ContactContext );
    const{allcontacts}=contactContext;
 return(
  <Fragment>
      {allcontacts.map((eachcontact)=>{return <h1 key={eachcontact.id}>{eachcontact.name}</h1>})}
  </Fragment>
 );
}

export default Contacts;

