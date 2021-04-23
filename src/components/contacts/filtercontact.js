import React,{useContext,useEffect,useRef} from 'react';
import ContactContext from '../context/Contactcontext';


const FilterContact=()=>{
    const contactContext=useContext(ContactContext);
    
    const {filtercontact,clearfilter,filtered}=contactContext;
    
    const text = useRef("");

    useEffect(()=>{
        console.log("filtered useEffect Firied");
       if(filtered==null) text.current.value='';
    },[contactContext,filtered]); 

    const onChange=(event)=>{
        if(text.current.value!==''){
            filtercontact(event.target.value);
        }else{
            clearfilter();
        }

    }

    return(
        <div className="fil-container">
                <input ref={text} onChange={onChange} className="input-box-half" placeholder="Search...." />           
        </div>
    );
}

export default FilterContact;