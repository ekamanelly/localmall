import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginFailure, loginSuccess, addProfile, removeProfile} from "../redux/actions/authAction"
import history from '../history/history'




class AuthCheck extends Component {
    componentDidMount() {
        if(this.props.auth.isAuthenticated()){
            this.props.LOGIN_SUCCESS()
            this.props.ADD_PROFILE(this.props.auth.profile)
            history.replace('/')
            console.log('login-success'+ this.props.auth.profile)
        } else {
            this.props.LOGIN_FAILURE()
            this.props.REMOVE_PROFILE()
            console.log('login-failure');           
            history.replace('/service')

        }
    }

    render() { 
        return (
            <div>
                working 
            </div>
         );
    }
}

function mapStateToProps(state) {
    return {

    }

}
 function MapDispatchToProps ( dispatch) {
     return {
         LOGIN_SUCCESS: () => dispatch(loginSuccess()),
         LOGIN_FAILURE: () => dispatch(loginFailure()),
         ADD_PROFILE: (profile) => dispatch(addProfile(profile)),
         REMOVE_PROFILE: () => dispatch(removeProfile())

     }

 }
 
export default connect(mapStateToProps, MapDispatchToProps)( AuthCheck);