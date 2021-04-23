import React,{Fragment,useState,useContext, useEffect} from "react";
import { withRouter } from "react-router-dom";
import AlertContext from "../context/alertcontext/alertcontext";
import AuthContext from "../context/authcontext/Authcontext";

const Login=(props)=>{

    const{ history }=props;

    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const{ loginUser,isAuthenticated,loadUser,error,logOut }=authContext;
    const { settingAlert  }=alertContext;

   

    useEffect(()=>{
        console.log('login useEffecr firied');
        if(isAuthenticated){
            history.push('/home');
        }
        if(error==='Invalid User'){
            settingAlert(error,'danger',2000);
        } 
        if(error==="Username or Password Incorrect") settingAlert(error,'danger',2000)

        if(error)  setTimeout(() => {
            window.location.reload(); 
        }, 2000);

    },[isAuthenticated,error,history])

    const[login,setLogin]=useState({
        email:"",
        password:""
    })

    const onChange=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }

    const loginValidator=(user)=>{
        let checked=false;
        const{email,password}=user;
    if(email===''||password===''){
      settingAlert('Please fill all the fields','danger');
    }
    else{
        checked=true;
        return checked;
    }
}
    
    const onSubmit=(event)=>{
        event.preventDefault();
        console.log("Firing Submit Event");
        const isValidated = loginValidator(login);
        if(isValidated) loginUser(login)
    }

    return(
        <Fragment>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input onChange={onChange} required  className="input-box" type="email" name="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} required className="input-box" type="password" name="password"></input>
                </div>
                <button type="submit" className="btn btn-block">Login</button>
            </form>
        </Fragment>
    );
}

export default withRouter(Login);