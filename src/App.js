import React,{Fragment} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/user/login';
import Signup from './components/user/signup';

function App() {
  return (
    <BrowserRouter>
    <Fragment>
    <Navbar />
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/signup"><Signup /></Route>
      </Switch>

    </Fragment>
    </BrowserRouter>
 
 
  );
}

export default App;
