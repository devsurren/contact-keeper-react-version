import React,{Fragment} from "react";

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log("Firing Signup Event");
    }


const Signup=()=>{
    return(
        <Fragment>
        <form className="signup-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input className="input-box" type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="input-box" type="email" name="email"></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input className="input-box" type="password" name="password"></input>
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm password</label>
                <input className="input-box" type="password" name="confirmpassword"></input>
            </div>
            <button type="submit" className="btn btn-block">Signup</button>
        </form>
    </Fragment>
    );
}

export default Signup;