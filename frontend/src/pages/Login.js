import React, { useState } from 'react'
import '../styles/mix.css'
import { NavLink } from 'react-router-dom' 
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const  Login = () => {
    const navigate=useNavigate();
    const [email , setEmail]=useState("");
    const [spinner , setSpinner]=useState(false);
    const sendOtp = async (e)=>{
        e.preventDefault();
        if(email===""){
            toast.error("Enter your Email")
        }else if(!email.includes('@')){
            toast.error("Enter valid Email")
        }
        else{
            setSpinner(true);
            const data={
                email:email
            }
            const response= await sentOtpFunction(data);
            console.log(response)
            if(response.message==="Email sent Successfully"){
                setSpinner(false);
                navigate("/user/otp" , {state:email})
            }
            else{
                toast.error("Please enter correct OTP")
            }
        }
    }
  return (
    <>
        <section>
            <div className="form_data">
                <div className="from_heading">
                    <h1>Welcome Back, Log In</h1>
                    <p style={{textAlign:'center'}}>Hi , we are gald you are back. Please login.</p>
                </div>
                <form action="">
                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" id="" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' />
                    </div>
                    <button className='btn' onClick={sendOtp}>Login
                    {
                        spinner?<span>
                            <Spinner animation='border' role='status'></Spinner>
                        </span>:<span></span>
                    }
                    </button>
                    <p>Don't have An account? <NavLink to='/register'>Sign Up</NavLink></p>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    </>
  )
}

export default Login