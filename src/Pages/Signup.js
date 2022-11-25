import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../Styles/Signup.css";
import Cookies from "js-cookie";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    let history = useHistory();

 
  const login = async () => {
    await Axios.post("https://react-crud-hiring.herokuapp.com/api/auth/local", {
      identifier: email,
      password: password,
    })
    .then((response) => {
        let token = response.data.jwt;
        Cookies.set("jwtToken", 'Bearer \n' + token)
        if(response.status===200){
            history.push("/")
        } else{
           console.log("Invalid Credentials");
        }
    })
    
  };
 

  const handlesubmit = (event) => {
    login(); 
    event.preventDefault();
  };

 
  
  return (
    <>
      <div className="container-s">
        <div className="Card-sign">
          <div className="line1"></div>
          <div className="text-s">
            <h1 className="title-s">CRUD OPERATIONS</h1>
            <h2 className="signin-s">SIGN IN</h2>
            <h4 className="small-text">
              Enter your credentials to access your account
            </h4>
            <form action={onsubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value.toString());
                  }}
                  value={email}
                  required
                />
              </div>
              <div className="pw">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value.toString());
                  }}
                  value={password}
                  required
                />
              </div>
              <button
                onClick={handlesubmit}
                className="sign-in-btn"
                type="submit"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
