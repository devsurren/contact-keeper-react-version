import React,{Fragment,useContext,useState,useEffect} from "react";
import AuthContext from "../context/authcontext/Authcontext";
import AlertContext from "../context/alertcontext/alertcontext";

const Signup=()=>{

    const authContext = useContext(AuthContext);

    const alertContext = useContext(AlertContext);

    const { registeruser,error  }=authContext;
    const { settingAlert }=alertContext

    const[user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    useEffect(()=>{
        if(error==='User Already There') settingAlert(error,'danger');

    },[error])
    
    const signupvalidator=(user)=>{
            let checked=false;
            const{name,email,password,password2}=user;
        if(name===''||email===''||password===''||password2===''){
           return settingAlert('Please fill all the fields','danger');
        }else if(password!==password2){
           return settingAlert('Password dosent match');
        }else{
            checked=true;
            return checked;
        }
    }

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        const{name,email,password}=user;    
        event.preventDefault();
        const isvalidated=signupvalidator(user);
        if(isvalidated){
            console.log("Firing Signup Event");
            console.log(user);
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

export default Signup;