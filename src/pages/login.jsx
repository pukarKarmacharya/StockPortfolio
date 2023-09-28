import { TextInput } from "../components/TextInput"
import LoginImage from "../assets/svgs/login.svg";
//import { Button } from "../components/Button";
import { login } from "../apis/login";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    //navigate("/");
    const onLogin = async () => {
        const resp = await login({ email, password });
        console.log("responsee", resp)
        console.log("eeee", email)
        console.log("ppppp", password)
        
        if (resp.success) {
          document.cookie = `x-access-token=${resp.data.token}; path=/;`;
          navigate("/");
        } else {
          alert(resp.error);
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
                    <p style={{fontSize:'70%'}}>Enter your credentials to access your account</p>
                    
                    <p>
                        <div style={{display: 'flex',justifyContent:'space-between'}}>
                            <button id="google-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Log in with Google</button>
                            <button id="apple-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Log in with Apple</button>
                        </div>
                    </p>
                    <p style={{fontSize:'70%'}}>----------------------------------------or----------------------------------------</p>

                        <p>Email Address</p>
                        <TextInput
                            type="text"
                            placeholder="Email"
                            value={email}
                            onTextChange={(text) => setEmail(text)}
                        />
                        <p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                Password
                                <a href="" style={{ fontSize: '80%', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        </p>
                        <TextInput
                            type="password"
                            placeholder="Password"
                            onTextChange={(text) => {
                                setPassword(text);
                            }}
                            value={password}
                        />
                        <br></br>
                        <button onClick={onLogin} label={"Login"} style={{width:'100%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Login</button>

                    <p style={{fontSize:'80%'}}>Don't have a account ?
                    <div
                        style={{
                        textAlign: "center",
                        marginTop: 10,
                        textDecoration: "underline",
                        textDecorationColor: "#6315eb",
                        color: "#6315eb",
                        cursor: "pointer",
                        }}
                        onClick={() => navigate("/signup")}
                    >
                    Signup
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
    )
}

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