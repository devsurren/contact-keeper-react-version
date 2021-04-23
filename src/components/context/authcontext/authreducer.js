
const AuthReducer=(state,action)=>{
    switch (action.type) {
        case "REGISTER_SUCCESS":
            console.log("Firing LOAD_USER reducer");
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
        case "LOAD_USER":
            console.log("Firing LOAD_USER reducer");
            return {
                    ...state,
                    isAuthenticated:true,
                    loading:false,
                    user:action.payload
             }
        
        
        case "REGISTER_FAIL":
        case "AUTH_ERROR":
            console.log("Firing REGISTER_FAIL reducer with AUTH_ERROR");
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                error:action.payload
            } 
        case "LOGIN_SUCCESS":
            console.log("Firing LOGIN_SUCCESS Reducer")
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false,
            }
        case "LOGIN_FAIL":
            console.log("Firing LOGIN_FAIL Reducer");
            console.log(action.payload);
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:action.payload
            }
        case "LOGOUT":
            console.log("Firing Logout reducer");
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:null
            }
            
    
        default:
           return state
    }
}

export default AuthReducer;