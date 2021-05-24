import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteEmployee, getEmployee } from "../action";

const Employeelist = (props) => {
  useEffect(() => {
    props.getEmployee();
  }, [])
  return <div><h3>Employee list</h3>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First_Name</th>
          <th scope="col">Last_Name</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>


        {
          
          props.employee.map(emp => {
            return (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-outline-info" onClick={()=>{props.history.push('updateemp/'+emp.id)}}>Edit</button>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{if(window.confirm(`Do you want to delete Id: ${emp.id}`))props.deleteEmployee(emp.id)}}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    <button type="button" className="btn btn-success" onClick={()=>{props.history.push('/addemp')}}>Add new Employee</button>
  </div>
}

const mapStateToProps = (state) => {
  return { employee: Object.values(state.employeeDetails) }
}
export default connect(mapStateToProps, { getEmployee, deleteEmployee })(Employeelist);