import React from 'react';
import './login.styles.css'

const LoginPage = () => {
    return ( 
        <div className="LoginPage">
            <section>
                <h2>Superior Rental</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <p>Forgot your password? <a href="#">Click Here</a></p>
            </section>
        </div>
     );
}
 
export default LoginPage;