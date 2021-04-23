
const ContactReducer=(state,action)=>{
   
    switch (action.type) {
        case "ADD_CONTACT":
            console.log('Firing ADD_CONTACT reducer');
            console.log(action.payload);
            return{
                ...state,
                contacts:[action.payload,...state.contacts,]
            };
        case "DELETE_CONTACT":
            console.log("Firing DELETE_CONTACT reducer")
            return{
                ...state,
                contacts:state.contacts.filter((eachcontact)=>{ return eachcontact.id!==action.payload.id })
            };
        case "SET_CURRENT":
            return{
                ...state,
                current:action.payload,
            };
        case "CLEAR_CURRENT":
            return{
                ...state,
                current:null
            };
        case "CLEAR_CONTACT":
            return{
                ...state,
                contacts:[],
                current:null,
                filtered:null
            }
        case "EDIT_CONTACT":
            console.log("Firing Edit Contact Reducer")
            return{
                ...state,
                contacts:state.contacts.map((eachcontact)=>{
                    if(eachcontact.id===action.payload.id){
                        return action.payload;
                    }else{
                        return eachcontact;
                    }
                })
            };
        case "FILTER_CONTACT":
            return{
                ...state,
                filtered:state.contacts.filter((eachcontact)=>{
                    const matchwith=new RegExp(`${action.payload}`,'gi');
                    return eachcontact.name.match(matchwith)||eachcontact.email.match(matchwith);
                })
            }
        case "CLEAR_FILTER":
            return{
                ...state,
                filtered:null
            }
        default:
           return state;
    }
}

export default ContactReducer;