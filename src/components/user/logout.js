import React,{Fragment,useContext,useEffect} from 'react';
import { withRouter  } from 'react-router-dom';
import AuthContext from '../context/authcontext/Authcontext';
import ContactContext from '../context/Contactcontext';
import 'react-toastify/dist/ReactToastify.css';

const Logout=(props)=>{

 const authState=useContext(AuthContext);
 const contactContext=useContext(ContactContext);


 const { logOut }=authState;
 const { clearContact  }=contactContext;

 useEffect(()=>{
     logOut();
     clearContact();
     props.history.push('/login')
 },[]);
 
 return(
     <Fragment>
        <h3>Logout Success..!!</h3>
    </Fragment>
 )
}

export default withRouter(Logout);