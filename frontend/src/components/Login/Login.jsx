import React, { useContext, useEffect, useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Login = ({ setShowLogin }) => {

    const { backend_url, setToken } = useContext(StoreContext);

    const [fadingOut, setFadingOut] = useState(false);
    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onLogin = async (event) => {
        event.preventDefault(); //prevent page from reloading
        let new_url = backend_url;
        //get currentState if the state is login set the url to the login route setup in backend else register route
        if(currentState === "Login"){
            new_url += "/api/users/login"
        }
        else{
            new_url += "/api/users/register"
        }
        const response = await axios.post(new_url, data); //POST request to http://localhost:4000/api/login or register with data

        //if success load the token with the token sent by the server and store it on the local storage of the browser  
        if(response.data.success){
            setToken(response.data.token);
            setShowLogin(false);
            localStorage.setItem("token", response.data.token);
        }
        else{
            alert(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const handleClose = () => {
        setFadingOut(true);
        setTimeout(() => setShowLogin(false), 500);
    }

    useEffect(() => {
        console.log(data)
    }, [data])

  return (
    <div className=' login-popup'>
        <form onSubmit={onLogin} className={`login-popup-container ${fadingOut ? 'login-popup-container-out' : 'login-popup-container'}`}>
            <div className=' login-popup-title'>
                <h2>{currentState}</h2>
                <img src={assets.crossIcon} onClick={handleClose}/>
            </div>
            <div className=' login-popup-inputs'>
                {
                    currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Name' required/>
                }
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>
            <button type='submit'>
                {
                    currentState === "Sign Up" ? "Create Account" : "Login"
                }
            </button>
            <div className="login-popup-conditions">
                <input type='checkbox' required/>
                <p>By contuining, i agree to the terms of use & privacy policy.</p>
            </div>
            {
                currentState === "Login" ? <p className=' login-signUp' onClick={() => setCurrentState("Sign Up")}>Create an account</p> : <p className='login-signUp' onClick={() => setCurrentState("Login")}>Already have an account</p>
            }
            {/* <p className=' login-signUp'>Create an account</p> */}
        </form>
    </div>
  )
}

export default Login