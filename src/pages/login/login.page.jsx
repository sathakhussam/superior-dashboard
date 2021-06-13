import React from 'react';
import './login.styles.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return ( 
        <div className="LoginPage">
            <section>
                <h2>Superior Rental</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <p>Forgot your password? <Link href="#">Click Here</Link></p>
            </section>
        </div>
     );
}
 
export default LoginPage;