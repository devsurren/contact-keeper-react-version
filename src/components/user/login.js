import React,{Fragment} from "react";

const Login=()=>{

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log("Firing Submit Event");
    }

    return(
        <Fragment>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input className="input-box" type="text" name="username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="input-box" type="password" name="password"></input>
                </div>
                <button type="submit" className="btn btn-block">Login</button>
            </form>
        </Fragment>
    );
}

export default Login;