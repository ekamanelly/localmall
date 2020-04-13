import React, { Component } from 'react';
import {Link} from 'react-router-dom';


//dispatch 
import {loginFailure, loginSuccess} from "../redux/actions/authAction"

// Style
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css';

//redux
import {connect} from 'react-redux';




class Navber extends Component {
     
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems,{});
          });
        //   console.log(this.props.userProfile)
    }
    handleLogout = () => {
        this.props.auth.logout();
        // this.props.LOGIN_FAILURE();


    }
    showProfile = () =>{
        if(this.props.isAuthenticated===true && this.props.profile!==null) {
            return (
                    <a>
                         <img className='profile__img circle' src={this.props.profile.picture}/>
                    </a>            
            )
        }else{          
            return null
        }}

    render() { 
        // console.log(this.props.profile)
        return ( 
            <div className="navbar-fixed">
                <nav className="nav-wrapper   indigo darken-3">
                    <div className="container">
                        <a href="" className="brand-logo">localMall</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">  
                            {this.props.isAuthenticated=== false?
                             <li onClick={ () => this.props.auth.login()}><a>Login</a></li>:
                             <li onClick={ this.handleLogout}><a>logout</a></li>}                      
                            <li><Link to="/">Food</Link></li>
                            <li><Link to="/news">Goodnews</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            
                            <li className="valign-wrapper">
                                <Link to='/sell'>                                
                                {
                                    // this.showProfile()
                                }
                                </Link>
                            </li>                                                 
                        </ul>
                    </div>                   
                </nav>
                <ul className="sidenav" id="mobile-demo">
                            {this.props.isAuthenticated=== false?
                             <li onClick={ () => this.props.auth.login()}><a>Login</a></li>:
                             <li onClick={ this.handleLogout}><a>logout</a></li>}                      
                            <li><Link to="/">Food</Link></li>
                            <li><Link to="/news">Goodnews</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            
                            <li className="valign-wrapper">
                                <Link to='/sell'>                                
                                {
                                    this.showProfile()
                                }
                                </Link>
                            </li>     
                </ul>    
            </div>
            
         );
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth_reducer.isAuthenticated,
        profile: state.auth_reducer.userProfile
    }
}
function mapDispatchToProps (dispatch) {
    return {
        LOGIN_FAILURE: () => dispatch(loginFailure())

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navber);