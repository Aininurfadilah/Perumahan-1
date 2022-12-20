import React from "react";
import "./Login.css"

function Login (){
return (
    <>
        <img className="wave" src="/wave.png" alt= ""/>
        <div class="container">
            <div className="img">
                <img src="/login.png" alt=""/>
            </div>
            <div className="login-container">
                <form action="/" method="post">
                    <h2 className="title">LOG IN</h2>
                    <div className="input-div one focus">
                    <div className="i">
                            <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                            <h5>email</h5>
                            <input name="username" className="input-fields" placeholder="Your email" type="email" required />
                    </div>
                    </div>
                    <div className="input-div pass focus">
                    <div className="i"> 
                            <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                            <h5>Password</h5>
                            <input name="password" className="input-fields" placeholder="Your Password" type="password" required />
                    </div>
                    </div>
                    <input type="submit" className="btn" value="Login"/>
                    <a href="/login-admin">Login Sebagai Admin?</a>
                </form>
            </div>

        </div>
    </>
);

};
 
export default Login;