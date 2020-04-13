import React from 'react';



const ProfileImg = (props) => {
    return ( 
        <>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <img className="circle responsive-img" src={props.picture}/>            
            </div>
        </>
     );
}
 
export default ProfileImg;