import React,{Fragment,useContext} from 'react';
import ContactContext from '../context/Contactcontext';

const ContactItem=(props)=>{
    const {contact}=props;
    const {id,name,email,phone,type }=contact;

    const contactContext = useContext(ContactContext);
    
    const{ deletecontact,setcurrent,clearcurrent }=contactContext;
    
    const onEdit=()=>{
        setcurrent(contact);
    };

    const onDelete=()=>{
        deletecontact(id);
        clearcurrent();
    }

    return(
        <Fragment>
        <div className="contactitem-container">
           <div className="contactitem-group">
                 <h3>{name}</h3>
                     <ul className="contactitem-ul">
                         <li> <i class="fa fa-envelope-open-o" aria-hidden="true"></i><span className="space-qt"></span>{email}</li>
                         <li> <i class="fa fa-phone" aria-hidden="true"></i><span className="space-qt"></span> {phone}</li>
                     </ul>
                <strong className="contactitem-type">{type}</strong>
           </div>
               <div className="contactitem-btns">
                    <button className="btn btn-edit" type="button" onClick={onEdit}>Edit</button>
                     <button className="btn btn-delete" type="button" onClick={onDelete} >Delete</button>
               </div>
        </div>
        </Fragment>
    );
}

export default ContactItem;