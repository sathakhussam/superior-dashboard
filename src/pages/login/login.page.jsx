import React, { useState, useEffect } from 'react';
import './login.styles.css'
import { Link } from 'react-router-dom';
import api from '../../api/api';

const LoginPage = (props) => {
    const {handleSubmit, handleInputChange, inputs} = useForms()
    useEffect(() => {
      const type = props.match.params.type
      if (type === 'n') {
        const jwt = localStorage.getItem("jwt")
        if (jwt) props.loginState.ChangeLogIn(true)
      } else if (type == "l") {
        props.loginState.ChangeLogIn(false)
        localStorage.setItem("jwt", null)
      }
    }, [])
    return ( 
        <div className="LoginPage">
            <section className="hello" style={{"margin": "1rem"}}>
                <h2>Superior Rental</h2>
                <form onSubmit={(evt) => handleSubmit(evt, props.loginState)}>
                    <input name="email" value={inputs.email} onChange={handleInputChange} type="email" placeholder="Email"/>
                    <input name="password" value={inputs.password} onChange={handleInputChange} type="password" placeholder="Password"/>
                    <button>Login</button>
                </form>
                <p>Forgot your password? <Link to="#">Click Here</Link></p>
            </section>
        </div>
     );
}

const loginUser = async (userName, password) => {
    const token = await api.post("users/login", {"email": userName, "password": password})
    return token
}

const useForms = (callback) => {
    const [inputs, setInputs] = useState({email: "", password: ""});
    const handleSubmit = async (event, loginState) => {
      if (event) {
        event.preventDefault();
      }
      const token = await loginUser(inputs.email, inputs.password)
      loginState.ChangeLogIn(true)
      localStorage.setItem("jwt", token.data.token)
      console.log(loginState)
    }
    const handleInputChange = (event) => {
      event.persist();
      console.log(event.target.value)
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

export default LoginPage;