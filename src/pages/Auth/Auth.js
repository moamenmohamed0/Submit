import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import "./Auth.css";
import Swal from "sweetalert2";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
function Auth() {
  const [pramas, setPramas] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const config = { 'content-type': 'application/json' };
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(password);
    var status = 400;
    if(pramas == "login"){
      axios.post(`http://localhost:5000/users/login`,{
          email: email,
          password: password
        }).then(
        (res) => {
            Swal.fire({
          title: "Login is success",
          icon: "success",
          confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
        )
        .catch(err => {
             return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Username or Password is Wrong",
            });
        // some error handling
      });
    }
    else{
      axios.post(`http://localhost:5000/users/signup`,{
          email: emailReg,
          password: passwordReg,
          name : username
        },config).then(
        (res) => {
            Swal.fire({
          title: "Register is success",
          icon: "success",
          confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
        )
        .catch(err => {
            console.log(err)
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "there is Something Wrong",
            });
        // some error handling
      });
    }
  };
  return (
    <div>
      <Header />
    <div className="auth">
      {pramas !== "register" ? (
        <div className="log">
          <h2>Already a Member? Log in here.</h2>
          
          <div className="log-user">
            <label>Email</label>
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="log-user">
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link>
            <span onClick={() => setPramas("register")}>
              Don't Have an account
            </span>
          </Link>
          <button className="submit" type="button" onClick={handleSubmit}>
            Login
          </button>
          {/* <div id="frgt-pass" className="frgt-pass">
            <input type="text" required />
            <label>Username or Email*</label>
            <button className="submit" type="button">
              Reset Password
            </button>
          </div> */}
        </div>
      ) : (
        <div className="Reg">
          <h2>Do not have an account? Register here</h2>
          <div className="Reg-user">
            <label>Username</label>
            <input type="text" required 
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="log-user">
            <label>Email</label>
            <input
              type="text"
              required
              onChange={(e) => setEmailReg(e.target.value)}
            />
          </div>
          <div className="Reg-user">
            <label>Password</label>
            <input type="password" required  onChange={(e) => setPasswordReg(e.target.value)} />
          </div>
          <div className="Reg-user">
            <label>Confirm Password</label>
            <input type="password" required />
          </div>
          <Link>
            <span onClick={() => setPramas("login")}>I have an account</span>
          </Link>
          <button className="submit" type="button" onClick={handleSubmit}>
            Register
          </button>
        </div>
      )}
    </div>
    <Footer />  
      </div>
  );
}

export default Auth;
