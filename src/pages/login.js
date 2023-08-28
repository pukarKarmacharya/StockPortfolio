import { TextInput } from "../components/TextInput"
import LoginImage from "../assets/svgs/login.svg";

export const Login = () => {
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
                            <button onclick="" id="google-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Log in with Google</button>
                            <button onclick="" id="apple-btn" style={{width:'40%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Log in with Apple</button>
                        </div>
                    </p>
                    <p style={{fontSize:'70%'}}>----------------------------------------or----------------------------------------</p>
                    <form name="loginForm" onsubmit="">
                        <p>Name</p>
                        <TextInput placeholder='name' type="text" name="name" id="name" style={{width:'100%'}}></TextInput>
                        <p>Email Address</p>
                        <TextInput placeholder='email' type="text" name="email" id="email" style={{width:'100%'}}></TextInput>
                        <p>
                            <div style={{display: 'flex',justifyContent:'space-between'}}>
                                Password
                                <a href="" style={{fontSize:'80%',textDecoration:'none'}}>Forgot password?</a>
                            </div>
                        </p>
                        <TextInput placeholder='password' type="text" name="password" id="password" style={{width:'100%'}}></TextInput>
                        <p style={{fontSize:'80%'}}>
                            <div style={{display: 'flex',justifyContent:'start'}}>
                                <TextInput placeholder='terms' type="radio"></TextInput>
                                I agree to the <a href="">Terms & Privacy</a>
                            </div>
                        </p>
                        <p><button onclick="" id="login-btn" style={{width:'100%',borderRadius:'12px',margin:'4px 2px',padding:'7px',backgroundColor:'lightblue',border:'none'}}>Login</button></p>
                    </form>
                    <p style={{fontSize:'80%'}}>Have a account ? <a href="" style={{textDecoration:'none'}}>Sign in</a></p>
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