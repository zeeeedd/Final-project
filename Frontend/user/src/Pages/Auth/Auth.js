import { RiIdCardLine } from "react-icons/ri";
import './Auth.css'
import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";




function Auth(){



    useEffect(() => {
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");
        const container = document.getElementById("container");

        if (registerButton && loginButton && container) {
            registerButton.addEventListener("click", () => {
                container.classList.add("right-panel-active");
            });

            loginButton.addEventListener("click", () => {
                container.classList.remove("right-panel-active");
            });

            // Cleanup event listeners on unmount
            return () => {
                registerButton.removeEventListener("click", () => {
                    container.classList.add("right-panel-active");
                });
                loginButton.removeEventListener("click", () => {
                    container.classList.remove("right-panel-active");
                });
            };
        }
    }, []); // Empty dependency array -> runs only once after mount


    return(
        <>
        <section className="body">
        <div className='container' id='container'>
            <div className='form-container register-container'>
                <form action='#' className="register-form" >
                    <h1 className="h3">Register here.</h1>
                    <input className="register-input" type ="text" placeholder="Name"/>
                    <input className="register-input" type ="email" placeholder="Email"/>
                    <input className="register-input" type ="password" placeholder="Password"/>
                    <button className="button">Register</button>
                    <span  className="span">or use your account</span>

                    <div className="social-container">


                    </div>



                </form>
            </div>
            <div className="form-container login-container">
             <form className="login-form" action="#">
                <h1 className="h3">Login here</h1>
            
                    <input className="login-input" type ="email" placeholder="Email"/>
                    <input className="login-input" type ="password" placeholder="Password"/>
                    <div className="content">
                        <div className="checkbox">
                        <input type ="checkbox" name="checkbox" id="checkbox"/>
                        <label>Remembre me</label>

                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password</a>

                        </div>
                    </div>
                    <button className="button">Login</button>
                    <span className="span">or use your account</span>
                    <div className="social-container">
                        <a href="#" className="social"> <i className="lni lni-facebook-fill"><FaFacebookF /></i></a>
                        <a href="#" className="social"> <i className="lni lni-google"><FaGoogle /></i></a>
                        <a href="#" className="social"> <i className="lni lni-linkedin-original"><FaLinkedin />  </i></a>

                    </div>


             </form>


            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div  className="overlay-panel overlay-left">
                        <h1 className="title">Hello <br></br> friends</h1>
                        <p className="p">if you have an account, please login</p>
                        <button className="ghost button" id="login">Login
                            <i className="lni lni-arrow-left login"></i>
                        </button>

                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="title">Start your <br></br>journey now</h1>
                        <p className="p">if you don't have an account yet, please register</p>
                        <button className="ghost button" id="register">Regitser
                        <i className="lni lni-arrow-right login"></i>
                        </button>
                        
                    </div>

                </div>

            </div>


        </div>
        </section>
        </>

    );
}

export default Auth;