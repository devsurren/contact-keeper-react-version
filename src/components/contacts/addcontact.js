import React,{useContext,useState,useEffect} from 'react';
import ContactContext from '../context/Contactcontext';

const AddContact=()=>{

    const contactContext=useContext(ContactContext);


   const [Name,setName]=useState("");
   const [Email,setEmail]=useState("");
   const [Phone,setPhone]=useState("");
   const [Type,setType]=useState("Professional");


    const { addcontact,current } = contactContext;
   // const {name,email,phone,type}=current
    useEffect(()=>{
       if (current){
        setName(current.name);
        setEmail(current.email);
        setPhone(current.phone);
        setType(current.type);
       };
    },[contactContext,current]);

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

   const onSubmit=(event)=>{
        event.preventDefault();
        const contact={
            name:Name,
            email:Email,
            phone:Phone,
            type:"Personal"
        }
        console.log(contact);
        addcontact(contact);
        // setContact({
        //     name:"",
        //     email:"",
        //     phone:"",
        //     type:"Professional" 
        // });
   }

    return(
        <form className="addcontact-form" onSubmit={onSubmit}>
            <h2>ADD CONTACT</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="input-box"  type="text" value={Name} onChange={(event)=>setName(event.target.value)} placeholder="Name..."  />
            </div>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="input-box"  type="email" value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder="Email..."  />
           </div>
            <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input className="input-box"  type="text" value={Phone} onChange={(event)=>setPhone(event.target.value)} placeholder="Phone..."  />
            </div>
                <input type="radio" value="Professional" /> Professional
                <span className="space"></span>
                <input type="radio" value="Personal" /> Personal
           <button className="btn btn-block">Add Contact</button>
        </form>
    );

}

export default AddContact