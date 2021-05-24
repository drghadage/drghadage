import { Field, reduxForm } from "redux-form";

const Employeeform=(props)=>{
return(
    <div>
        
        <form onSubmit={props.handleSubmit(props.savedetails)}>
        <table>
            <tbody>
                <tr>
                    <td><label>Enter First Name: </label></td>
                    <td><Field name='firstName' component='input' type='text'></Field></td>
                </tr>
                <tr>
                    <td><label>Enter Last Name: </label></td>
                    <td><Field name='lastName' component='input' type='text'></Field></td>
                </tr>
            </tbody>
        </table>
        <button type='submit' className='btn btn-success'> Save </button>
        </form>
    </div>)
}
export default reduxForm({
    form: "employeeform"
})(Employeeform);