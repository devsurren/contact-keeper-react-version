import React,{Fragment,useContext,useState,useEffect} from "react";
import { withRouter  } from 'react-router-dom';
import AuthContext from "../context/authcontext/Authcontext";
import AlertContext from "../context/alertcontext/alertcontext";

const Signup=(props)=>{

    const{ history }=props

    const authContext = useContext(AuthContext);

    const alertContext = useContext(AlertContext);

    const { registeruser,error,user,loadUser,isAuthenticated  }=authContext;
    const { settingAlert }=alertContext

    const[User,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    useEffect(()=>{
        if(isAuthenticated){
            loadUser();
            history.push('/home')
        }
        if(error==='User Already There') settingAlert(error,'danger');
        if(error)  setTimeout(() => {
            window.location.reload(); 
        }, 3000);
    },[error,isAuthenticated,props.history])
    
    const signupvalidator=(user)=>{
            let checked=false;
            const{name,email,password,password2}=user;
        if(name===''||email===''||password===''||password2===''){
           settingAlert('Please fill all the fields','danger');
        } 
            checked=true;
            return checked;
        
    }

    const onChange=(event)=>{
        setUser({...User,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        const{name,email,password,password2}=User;    
        event.preventDefault();
           if(password!==password2){
       return  settingAlert('Password dosent match','danger');
    }
       const isvalidated=signupvalidator(User);
    
        if(isvalidated){
            console.log("Firing Signup Event");
            console.log(User);
            registeruser({name,email,password});
         }else{
             settingAlert(error,'danger');
         }
       
    }
   
    return(
        <Fragment>
        <form className="signup-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input required onChange={onChange} className="input-box" type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required onChange={onChange}  className="input-box" type="email" name="email"></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input required onChange={onChange}  className="input-box" type="password" name="password"></input>
            </div>
            <div className="form-group">
                <label required htmlFor="confirmpassword">Confirm password</label>
                <input onChange={onChange}  className="input-box" type="password" name="password2"></input>
            </div>
            <button type="submit" className="btn btn-block">Signup</button>
        </form>
    </Fragment>
    );
}

export default withRouter(Signup);