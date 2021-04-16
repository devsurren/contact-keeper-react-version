
const AuthReducer=(state,action)=>{
    switch (action.type) {
        case "REGISTER_SUCCESS":
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }

        case "REGISTER_FAIL":
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                error:action.payload
            }    
    
        default:
           return state
    }
}

export default AuthReducer;