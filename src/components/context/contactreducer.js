
const ContactReducer=(action,state)=>{
    switch (action.type) {
        case "ADD_CONTACT":
            return{
                ...state,
                contacts:[state.contacts,action.payload]
            };
    
        default:
           return state;
    }
}

export default ContactReducer;