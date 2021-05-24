import { connect } from "react-redux"
import { updateemployee } from "../action"
import Employeeform from "./Employeeform"

const UpdateEmployee=(props)=>{
    const upemployee=async (details)=>{
         await props.updateemployee(details)
         alert('Details of '+details.id+' is Updated !!!')
         props.history.push('/emplist')
    }
    return(<div>
        <h3>update Employee Details...</h3>
        <Employeeform savedetails={upemployee} initialValues={props.employee}/>
        </div>
    )

}
const mapStateToProps=(state,ownProps)=>{
    return ({employee:state.employeeDetails[ownProps.match.params.id]})
}
export default connect(mapStateToProps,{updateemployee}) (UpdateEmployee);