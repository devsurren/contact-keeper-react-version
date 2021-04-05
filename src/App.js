import React,{ Fragment } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/user/login';
import Signup from './components/user/signup';
import ContactState from  './components/context/contactstate';
import Home from './components/pages/home';

function App() {
  return (
  <ContactState>
    <Fragment>
      <BrowserRouter>
    <Navbar /> 
      <Switch>
       <Route exact path="/home"> <Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/signup"><Signup /></Route>
      </Switch>
    </BrowserRouter>
    </Fragment>
  </ContactState>   
  );
}

export default App;
