import axios from "axios";

export const signup = async ({ firstName, lastName, email, password } => {
    const API_URL = "http:localhost:8000";
    try{
        const response = await axios.post(`${API_URL}/register`, {
            firstName,
            lastName,
            email,
            password,
});


//.then