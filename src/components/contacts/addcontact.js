import React,{useContext,useState,useEffect} from 'react';
import { withRouter  } from 'react-router-dom'

import ContactContext from '../context/Contactcontext';
import AuthContext from '../context/authcontext/Authcontext'
import AlertContext from '../context/alertcontext/alertcontext'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContact=()=>{

    const contactContext=useContext(ContactContext);
    const authContext=useContext(AuthContext);
    const alertContext =useContext(AlertContext);

    const { current,createContact,addcontact,updateContact } =contactContext;
   // const { isAuthenticated,loadUser  }=authContext;
    const { settingAlert  }=alertContext;


   const [Name,setName]=useState(" ");
   const [Email,setEmail]=useState(" ");
   const [Phone,setPhone]=useState(" ");
   const [Type,setType]=useState("");


   
   // const {name,email,phone,type}=current
    useEffect(()=>{ 
        console.log('addcontact useEffect firied'); 
        if (current){
        setName(current.name);
        setEmail(current.email);
        setPhone(current.phone);
        setType(current.type);
        
       };
    },[current]);
  //  if(current) console.log(current)
//    const [contact,setContact]=useState({
//       name:"",
//       email:"",
//       phone:"",
//       type:"Professional" 
//    })

   //const {name,email,phone,type}=contact;

//    const onChange=(event)=>{
//     setContact({...contact,[event.target.name]:event.target.value});
//    }

    const addContactValidator=(contact)=>{
        let checked=false;
        const {name,email,phone,type}=contact
    if(name===''||email===''||phone===''||type===''){
       return settingAlert('Please fill all the fields','danger');
    }
    else{
        checked=true;
        return checked;
    }

    }

   const onSubmit=(event)=>{
        event.preventDefault();
        const contact={
            name:Name,
            email:Email,
            phone:Phone,
            type:Type
        }
        console.log(current);
        const isValidated = addContactValidator(contact);
       if(isValidated&&!current) createContact(contact);
       // if(current) console.log(current);
        window.location.reload();
        // setContact({
        //     name:"",
        //     email:"",
        //     phone:"",
        //     type:"Professional" 
        // });
   }

   const onSubmitUpdateContact=(event)=>{
        event.preventDefault();
        updateContact(current._id,Name,Email,Phone,Type);
        window.location.reload();    
   }

    return(
        <form className="addcontact-form" onSubmit={current?onSubmitUpdateContact:onSubmit}>
            <h2>{current?"UPDATE":"ADD"} CONTACT</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required className="input-box"  type="text" value={Name} onChange={(event)=>setName(event.target.value)} placeholder="Name...!!" />
            </div>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required className="input-box"  type="email" value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder="Email...!!"  />
           </div>
            <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input required className="input-box"  type="text" value={Phone} onChange={(event)=>setPhone(event.target.value)} placeholder="Phone...!!"  />
            </div>
            <input required type="radio" id="Professional" name="type" onChange={(event)=>setType(event.target.value)} value={"Professional"}/>
             <label className='space' htmlFor="Professional">Professional</label>
            <input required className="space" required  type="radio" id="Personal" name="type" onChange={(event)=>setType(event.target.value)} value={"Personal"}/>
            <label  htmlFor="Personal">Personal</label>
           <button className="btn btn-block">{current?"Update":"Add"} Contact</button>
        </form>
    );

}

export default withRouter(AddContact);