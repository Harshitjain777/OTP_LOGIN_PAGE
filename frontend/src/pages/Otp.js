import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { userVerify } from '../services/Apis';
function Otp() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const email=location.state;
  console.log(email);
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    if (otp === "") {
      toast.error("Enter your OTP")
    }
    else if(!/[^a-zA-Z]/.test(otp)){
      toast.error("Enter valid OTP")
    }
    
    else{
      const data={
        otp,
        email
      }
      console.log(data);
      const res=await userVerify(data);
      if(res.message==="Logged in Successfully"){
        localStorage.setItem("userdbtoken" , res.usertoken);
        toast.success(res.message);
        setTimeout(() => {
          navigate("/dashboard")
        }, 3000);
      }
      else{
        toast.error(res.error);
      }
    }

  }

  return (
    <section>
      <div className="form_data">
        <div className="from_heading">
          <h1>Please Enter your OTP here</h1>
        </div>
        <form action="">
          <div className="form_input">
            <label htmlFor="text">OTP</label>
            <input type="text" value={otp} name="text" onChange={(e) => { setOtp(e.target.value) }} id="" placeholder='Enter your OTP' />
          </div>
          <button onClick={LoginUser} className='btn'>Submit</button>

        </form>
      </div>
      <ToastContainer></ToastContainer>

    </section>
  )
}

export default Otp