import React, { Component } from 'react';
import {connect} from 'react-redux'

class Sell extends Component {




displayWhenAuthenticated = () => {
    if(this.props.isAuthenticated===true && this.props.profile!==null) {
        return (
            <>
                <h2 className="card-content white-text">Hey {this.props.profile.name}, you can sell your Goods without hustle...this is our it works. You send clear picture of your item and small description. I will look your the closest customer out there for yo           </h2>
                <p className="grey-text center">call me if you have item to put out there</p>
            </>
                          
        )
    }else{          
        return null
      
}}
    render() { 
        console.log(this.props.profile)
        return ( 
            <div className="row">
                <div className='col l8 s12 offset-l2'>
                    <div className="card indigo darken-4">                         
                        { this.displayWhenAuthenticated()

                        } 

                    </div>
                </div>
            </div>
            
         );
    }

   
}

function mapStateToProps (state) {
    return {
        isAuthenticated: state.auth_reducer.isAuthenticated,
        profile: state.auth_reducer.userProfile
    }
}


 
export default connect(mapStateToProps)(Sell);