import { React, Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { validateuser } from '../action';
import Loginservice from './Loginservice';

class Login extends Component {
    onSubmit = (values) => {
        Loginservice.validate(values).then(
            response=>{
                this.props.validateuser({type:'LOGIN_SUCCESS', payload:response.data.token})
                this.props.history.push('/emplist')
            }
        ).catch( 
               error=>{  
                   alert("INVALID_CREDENTIALS")          
                this.props.validateuser({type:'LOGIN_FAILED', payload:error.message})}
        )

    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Enter UserName: </label></td>
                                <td><Field type='text' name='username' component='input' placeholder='abc@gmail.com' /></td>
                            </tr>
                            <tr>
                                <td>Enter Password: </td>
                                <td><Field type='password' name='password' component='input' value={this.props.value} onChange={this.props.onChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit' className="btn btn-primary">Login</button>
                </form>


            </div>
        )
    }
}
const loginform= reduxForm({
    form: 'login'
})(Login);
const mapStateToProps=(state)=>{
    //console.log(state.logindetails.error)
    return{error:state.logindetails.error}
}
export default connect(mapStateToProps,{validateuser})(loginform);