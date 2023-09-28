import React, { useState } from "react";
import LoginImage from "../assets/svgs/login.svg";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";
import { signup } from "../apis/signup";

export const Signup = () => {
  const navigate = useNavigate();
  const [signupFields, setSignupFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkPasswordsMatch = () => {
    if (signupFields.password !== signupFields.confirmPassword) {
      return alert("Passwords didnot match!");
    }
    return true;
  };

  const onSubmit = async () => {
    if (checkPasswordsMatch()) {
      const response = await signup(signupFields);
      console.log("response", response)
      if (response.success) {
        alert("User registered successfully!");
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <div style={
        {
        display:'flex', 
        backgroundColor: 'white'
        }
        }>
        <div style={{flex: '30%'}}>
            <div style={{backgroundColor: 'white',padding:'20px',margin:'20px'}}>
                <h3>Get Started Now</h3>
                <p style={{fontSize:'70%'}}>Enter your credentials to create your account</p>
                
                <p>
                    <div style={{display: 'flex',justifyContent:'space-between'}}>
                        <button id="google-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Signup with Google</button>
                        <button id="apple-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Signup with Apple</button>
                    </div>
                </p>
                <p style={{fontSize:'70%'}}>----------------------------------------or----------------------------------------</p>
               
                      <p>First Name</p>
                      <TextInput
                          type="text"
                          placeholder="FirstName"
                          onTextChange={(text) =>
                              setSignupFields({ ...signupFields, firstName: text })
                          }
                      />
                      <p>Last Name</p>
                      <TextInput
                          type="text"
                          placeholder="LastName"
                          onTextChange={(text) =>
                              setSignupFields({ ...signupFields, lastName: text })
                          }
                      />
                      <p>Email Address</p>
                      <TextInput
                          type="text"
                          placeholder="Email"
                          onTextChange={(text) =>
                              setSignupFields({ ...signupFields, email: text })
                          }
                      />
                      <p>
                          Password</p>
                      <TextInput
                          type="password"
                          placeholder="Password"
                          onTextChange={(text) =>
                              setSignupFields({ ...signupFields, password: text })
                          }
                      />

                      <p>
                          Confirm Password</p>
                      <TextInput
                          type="password"
                          placeholder="Confirm Password"
                          onTextChange={(text) =>
                              setSignupFields({ ...signupFields, confirmPassword: text })
                          }
                      />

                    <p style={{fontSize:'80%'}}>
                        <div style={{display: 'flex',justifyContent:'start'}}>
                            <TextInput placeholder='terms' type="radio"></TextInput>
                            I agree to the <a href="">Terms & Privacy</a>
                        </div>
                    </p>
                    <button onClick={onSubmit} style={{width:'100%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>SignUp</button>
              
                <p style={{fontSize:'80%'}}>Already have a account ? 
                          <div
                            onClick={() => navigate("/login")}
                          >
                            Login
                          </div>
                </p>
            </div>
        </div>
        <div style={styles.imageContainer}>
            <div style={styles.imageBackground}>
                <img src={LoginImage} alt="React Logo" style={styles.image}/>
            </div>    
        </div>
    </div>
  );
};

const styles = {
    imageContainer:{
        flex: '70%',
        paddingLeft:'20px'
    },
    imageBackground:{
        backgroundColor: 'lightblue',
        padding:'20px',
        marginRight:'20px',
        marginTop:'20px',
        height:'78%',
        borderRadius:'14px'
    },
    image:{
        width: "100%",
        height: "100%",
    },
}