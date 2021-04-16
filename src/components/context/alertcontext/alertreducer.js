

const AlertReducer=(state,action)=>{

    switch (action.type) {
        case "SET_ALERT":
            console.log("Firing SET_ALERT reducer");
            return [...state,action.payload]

        case "REMOVE_ALERT":
            console.log("Firing REMOVE_ALERT reducer");
            return state.filter(eachalert => eachalert.id!==action.payload);
            
           
    
        default:
            return state
    }
}

export default AlertReducer;