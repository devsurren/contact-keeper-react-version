import React,{useContext,useState} from 'react';
import ContactContext from '../context/Contactcontext';

const AddContact=()=>{

    const contactContext=useContext(ContactContext);

    const { addcontact } = contactContext;

   const [contact,setContact]=useState({
      name:"",
      email:"",
      phone:"",
      type:"Professional" 
   })

   const {name,email,phone,type}=contact;

   const onChange=(event)=>{
    setContact({...contact,[event.target.name]:event.target.value});
   }

   const onSubmit=(event)=>{
        event.preventDefault();
        addcontact(contact);
   }

    return(
        <form className="form" onSubmit={onSubmit}  >
            <h2>ADD CONTACT</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={onChange} placeholder="Name..."  />
            </div>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={onChange} placeholder="Email..."  />
           </div>
            <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input type="text" value={phone} onChange={onChange} placeholder="Phone..."  />
            </div>
          <div className="form-group">
                <input type="radio" value={type} /> Professional
                <input type="radio" value={type} /> Personal
          </div>
           <button className="btn btn-block">Add Contact</button>
        </form>
    );

}

export default AddContact