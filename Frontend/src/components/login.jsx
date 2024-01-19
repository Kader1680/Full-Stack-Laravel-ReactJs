import React from 'react'

export default function Login() {
  return (
    <div>
        <section> 

            <div class="signin"> 

                    <div class="content"> 

                    <h2>Welcome login</h2> 

                    <div style={{ backgroundColor:"#222222" }} class="form"> 

                    <div  class="inputBox"> 

                        <input style={{ backgroundColor: "#333333" }} type="text" required /> <i>Username</i> 

                    </div> 

                    

                   
               
                    <div class="inputBox"> 

                        <input type="password" required /> <i>Password</i> 

                    </div> 

                    <div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a> 

                    </div> 

                    <div class="inputBox"> 

                        <input type="submit" value="Login" /> 

                    </div> 

                    </div> 

                    </div> 

            </div> 

        </section>
    </div>
  )
}
