import { Field, reduxForm } from 'redux-form'
import Loginservice from './Loginservice'
const Register = (props) => {
    const registerr=(values)=>{
        console.log(values)
        Loginservice.register(values).then(re=>{
            alert('Registration Successfull !!!')
            props.history.push('login')
        })
    }
    return (<div>
        <h3>Register...</h3>
        <form onSubmit={props.handleSubmit(registerr)}>
        <table>
            <tbody>
                <tr>
                    <td><label>Enter UserName: </label></td>
                    <td><Field name='username' component='input' type='text'></Field></td>
                </tr>
                <tr>
                    <td><label>Enter Password: </label></td>
                    <td><Field name='password' component='input' type='password'></Field></td>
                </tr>
            </tbody>
        </table>
        <button type='submit' className='btn btn-success'>Sign Up</button>
        </form>
    </div>)
}
export default reduxForm({
    form: "registration"
})(Register);