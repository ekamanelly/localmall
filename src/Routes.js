import React, { Component } from 'react';

//redux 
import {connect} from 'react-redux';


//redux actions
import {loginFailure, loginSuccess, addProfile, removeProfile} from "./redux/actions/authAction"

//style
import './callbcak.css'
import 'materialize-css/dist/css/materialize.css';

//Components
import Navber from './Components/Navbar';
import Home from './Components/Home';
import Request from './Components/Request';
import Sell from './Components/Sell';
import Service from './Components/Service';
import Newsfield from './Components/Newsfield';
import Auth from './util/auth'




//route 
import { Router, Route, Switch} from 'react-router-dom';
import history from './history/history';


import Callback from './Components/Callbcak';
import AuthCheck from './util/authCheck';

const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash) {
      auth.handleAuth()
    }
  }




 class Routes extends Component {
    componentDidMount() {
        if(auth.isAuthenticated()){
            this.props.LOGIN_SUCCESS();
            auth.getProfile()
            setTimeout( () => {this.props.ADD_PROFILE(auth.profile)}, 2000)           
                       
        } else {
            this.props.LOGIN_FAILURE();
            this.props.REMOVE_PROFILE();       

        }
    }


     render() { 
         return ( 
             <>
                <Router history={history} >
                    <Navber auth={auth}/>
                    <Switch> 
                        <Route path='/authcheck' render={ () => <AuthCheck auth={auth}/>}/>                
                        <Route path='/' exact  component={Home}/>
                        <Route path='/sell' component={Sell}/>
                        <Route path='/request' component={Request}/>
                        <Route path='/news' component={Newsfield}/>
                        <Route path='/service' component={Service}/>
                        <Route path="/callback" render={(props) =>{handleAuthentication(props); return <Callback/>} }/>                      
                    </Switch>
                </Router>

             </>
          );
     }
 }


 function mapDispatchToProps (dispatch) {
    return {
        LOGIN_SUCCESS: () => dispatch(loginSuccess()),
        LOGIN_FAILURE: () => dispatch(loginFailure()),
        ADD_PROFILE: (profile) => dispatch(addProfile(profile)),
        REMOVE_PROFILE: () => dispatch(removeProfile())

    }

}
  
 export default  connect(null, mapDispatchToProps)(Routes);
  