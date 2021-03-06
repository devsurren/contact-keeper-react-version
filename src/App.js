import React,{ Fragment} from 'react';
//import {Tostify} from './components/test'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/user/login';
import Signup from './components/user/signup';
import ContactState from  './components/context/contactstate';
import Home from './components/pages/home';
import AuthState from './components/context/authcontext/authstate';
import Alert from './components/Alerts';
import AlertState from './components/context/alertcontext/Alertstate';
import {settingUpGlobalHeader} from './components/utils/utils'
import Logout from './components/user/logout';
function App() {
  if(localStorage.token) settingUpGlobalHeader(localStorage.token);
  return (
<AuthState>
    <ContactState>
       <AlertState>
        <Fragment>
          <BrowserRouter>
              <Navbar /> 
                <Alert />
                <Switch>
                    <Route exact path="/home"> <Home /></Route>
                      <Route exact path="/login"><Login /></Route>
                      <Route exact path="/logout"><Logout /></Route>
                      <Route exact path="/signup"><Signup /></Route>
                 </Switch>
              </BrowserRouter>
          </Fragment>
        </AlertState>
    </ContactState>  
  </AuthState>
  
  );
}

export default App;
