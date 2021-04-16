import React,{useContext,useEffect,useRef} from 'react';
import ContactContext from '../context/Contactcontext';


const FilterContact=()=>{
    const contactContext=useContext(ContactContext);
    
    const {filtercontact,clearfilter,filtered}=contactContext;
    
    const text = useRef("");

    useEffect(()=>{
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
        <input ref={text} onChange={onChange} className="input-box" placeholder="search..."  />
    );
}

export default FilterContact;