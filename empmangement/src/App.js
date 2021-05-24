import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Employeelist from './Componenet/Employee/Employeelist';
import Newemployee from './Componenet/Employee/Newemployee';
import UpdateEmployee from './Componenet/Employee/UpdateEmployee';
import Header from './Componenet/Header';
import Authenticate from './Componenet/Login/Authenticate';

import Login from './Componenet/Login/Login'
import Register from './Componenet/Login/Register';

const App = () => {
    return (<div className='container'>
        <Router>
            <Header/>
            <center>
            <Switch>
                
                    <Route path='/' exact component={Login} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Authenticate path='/emplist' component={Employeelist} />
                    <Authenticate path='/addemp' component={Newemployee} />
                    <Authenticate path='/updateemp/:id' component={UpdateEmployee} />
                
            </Switch>
            </center>
        </Router>
    </div>)
}
export default App;