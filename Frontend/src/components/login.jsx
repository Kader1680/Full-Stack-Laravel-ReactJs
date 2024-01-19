import axios  from 'axios';
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
export default function Login() {

    const [name, setName] = useState();
    const [password, setpassword] = useState();
    const [error, seterror] = useState();
    const navigate = useNavigate();
const handelLogin = async (e) => {
    e.preventDefault();
    

    try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {name: name,
                password: password,})

        if (response.data.message == "authentication sucsseful") {
            navigate("/all")
        }else{
            seterror(response.data.message)
        }
        // console.log(response.data.message)
        
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

                        <form method='POST' onSubmit={handelLogin}>
            <div className='error'>{error}</div>
                                <div class="form"> 


                                    
                                    <div  class="inputBox"> 

                                            <input  name='name' value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" required /> <i>Username</i> 

                                    </div> 
                                    
                                    <div class="inputBox"> 

                                        <input name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" required /> <i>Password</i> 

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
