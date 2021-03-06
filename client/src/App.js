import React, { Fragment, useEffect } from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import './App.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

import {loadUser} from './actions/auth';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/


if(localStorage.token){
  setAuthToken(localStorage.token);
}



const App = () =>{
  useEffect(()=>{

    store.dispatch(loadUser());

  },[]);
  return (
  <Provider store={store}>
    <Router >
      <Fragment>
      <Navbar/>
      <Route exact path='/'  component={Landing}/>
      <section className="container">
        <Alert />
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
             <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        </Switch>

      </section>
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
