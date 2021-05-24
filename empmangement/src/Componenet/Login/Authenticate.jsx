
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";


const Authenticate = (props) => {
    return (<div>
        {props.status ?
            (<Route {...props}></Route>) :
            (<Redirect to="login"></Redirect>)
        }
    </div>
    );
}
const mapStateToProps = (state) => {
    return { status: state.logindetails.status }
}
export default connect(mapStateToProps)(Authenticate);