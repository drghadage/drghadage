import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../cognizant.png'
const Header = (props) => {
    useEffect(()=>{
        
    },[props.status])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="navbar-brand" src={logo} alt='Cognizant' style={{ width: '200px', height: '50px' }}></img>
            <ul className="navbar-nav navbar-collapse justify-content-end">
            {!props.status&&<li style={{paddingRight:'10px'}}><Link to="register">Register</Link></li>}
            {!props.status&&<li style={{paddingRight:'10px'}}><Link to="/login">Login</Link></li>}
            {props.status&& <li><button onClick={()=>{}}>Logout</button></li>}
            </ul>

        </nav>
    )
}
const mapStateToProps=(state)=>{
return({status:state.logindetails.status})
}
export default connect(mapStateToProps) (Header);