import axios from "axios"


export const validateuser = (userstate) => {
    return { type: userstate.type, payload: userstate.payload }
}
export const addnewemployee=(newemp)=>async(dispatch,getState)=>{
    await axios.post('http://localhost:9090/cognizant/employees',newemp, {
        headers: {
            'Authorization': 'Bearer ' + getState().logindetails.token
        }
    })
}
export const updateemployee=(empobj)=>async(dispatch,getState)=>{
    await axios.put(`http://localhost:9090/cognizant/employees/${empobj.id}`,empobj, {
        headers: {
            'Authorization': 'Bearer ' + getState().logindetails.token
        }
    })
}
export const getEmployee = () => async (dipatch, getState) => {
    const response = await axios.get('http://localhost:9090/cognizant/employees', {
        headers: {
            'Authorization': 'Bearer ' + getState().logindetails.token
        }
        
    })
    dipatch({type:'GET_EMPLOYEE', payload:response.data})
}

export const deleteEmployee = (id) => async (dipatch, getState) => {
    //console.log('hi')
    await axios.delete(`http://localhost:9090/cognizant/employees/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + getState().logindetails.token
        }
        
    })
    dipatch({type:'DELETE_EMPLOYEE', payload:id})
}
