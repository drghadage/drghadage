import axios from "axios"

class LoginService{
 validate=async(user)=>{
    return await axios.post("http://localhost:9090/authenticate",user)
}
register=async(user)=>{
    return await axios.post("http://localhost:9090/registerUser",user)
}
}

export default new LoginService();