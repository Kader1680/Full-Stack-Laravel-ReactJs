import axios  from 'axios';
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

export default function Register() {


const [username, setName] = useState();
const [email, setemail] = useState();
const [address, setaddress] = useState();
const [city, setcity] = useState();
const [password, setpassword] = useState();
const navigate = useNavigate();
const handelRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append("name", username);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("password", password);

    try {
        const response = await axios.post("http://127.0.0.1:8000/api/register", formData)
        
        console.log(response.data.message)
    } catch (error) {
        console.error("Error submitting form:", error);
    }

}

return (
    <div style={{ height:"19rem" }} className=' mt-3 rounded-2'>
        <section style={{ height:"45rem" }}  className='rounded-2'> 

            <div class="signin rounded-2"> 

                    <div class="content pt-5 text-center"> 

                        <h2>Welcome Register</h2> 

                        <form method='POST' onSubmit={handelRegister}>

                                <div class="form"> 


                                    
                                    <div  class="inputBox"> 

                                            <input  value={username} onChange={(e)=>{setName(e.target.value)}}  type="text" required /> <i>Username</i> 

                                    </div> 
                                    <div  class="inputBox"> 

                                        <input value={email} onChange={(e)=>{setemail(e.target.value)}}  type="text" required /> <i>Email</i> 

                                    </div> 
                                    <div  class="inputBox"> 

                                        <input value={address} onChange={(e)=>{setaddress(e.target.value)}} type="text" required /> <i>Address</i> 

                                    </div> 
                                    <div  class="inputBox"> 

                                        <input value={city} onChange={(e)=>{setcity(e.target.value)}}  type="text" required /> <i>City</i> 

                                    </div>
                                    <div class="inputBox"> 

                                        <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" required /> <i>Password</i> 

                                    </div> 
                                    {/* <div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a></div>  */}
                                    <div class="inputBox"> 

                                        <input type="submit" value="register" /> 

                                    </div> 


                                    </div> 
                        </form>
                    </div> 

            </div> 

        </section>
    </div>
  )
}
