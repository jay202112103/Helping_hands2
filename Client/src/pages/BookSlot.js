import React, { Component } from 'react';
 //import "./bookslot.css";
class BookSlot extends Component {
    render() {
        return (
            <div className='mainDiv'>


                {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"> */}
                <form>
                    <h1>Login Form</h1>
                    <div class="formcontainer">
                        <hr />
                        <div class="container">
                            <label className='labelAll' for="uname"><strong>Name</strong></label>
                            <input type="text" placeholder="Enter Username" name="uname"/>
                            <label className='labelAll' for="uname"><strong>Gender</strong></label>
                            <div>
            <div><input type="radio" value="Male" name="servant_gender" /> Male</div>
            <div><input type="radio" value="Female" name="servant_gender" /> Female</div>
            <div><input type="radio" value="Other" name="servant_gender" /> Other</div>
            </div>
        
                            <input type="text" placeholder="Enter Username" name="uname"/>
          
                            <label className='labelAll' for="contact"><strong>Contact</strong></label>
                            <input type="text" placeholder="Enter Contact" name="contact" />
                            <label className='labelAll' for="uname"><strong>Username</strong></label>
                            <input type="text" placeholder="Enter Username" name="uname" />
                            <label className='labelAll' for="uname"><strong>Username</strong></label>
                            <input  type="text" placeholder="Enter Username" name="uname" />
                                <label className='labelAll' for="psw"><strong>Password</strong></label>
                                <input type="password" placeholder="Enter Password" name="psw" />
                        </div>
                        <button type="submit" >Login</button>
                        <div class="container">
                             {/* style="background-color: #eee"> */}
                            <label className='labelAll'>
                                 {/* style="padding-left: 15px"> */}
                                 <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                            <span class="psw"><a href="#"> Forgot password?</a></span>
                        </div>
                    </div>
                </form>
            </div>
)}};

                        export default BookSlot;