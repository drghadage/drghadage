import { connect } from "react-redux"
import { addnewemployee } from "../action"
import Employeeform from "./Employeeform"

const Newemployee=(props)=>{
    const addemployee=async(details)=>{
        await props.addnewemployee(details)
        alert('Registration for '+details.firstName+' is Successfull !!!')
        props.history.push('/emplist')
    }
    return(<div>
        <h3>Add New Employee Details...</h3>
        <Employeeform savedetails={addemployee}/>
        </div>
    )

}
export default connect(null,{addnewemployee}) (Newemployee);