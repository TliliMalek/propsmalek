import React from "react";
import PropTypes from "prop-types";

const Profile = (props)  =>{

    
    return(
        
     <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        margin:"10px",
        padding:"15px",
        width:"2500px",
        height:"450px",
        border:"1px solid white",
        borderRadius:"10px",
        backdropFilter: "blur(9px)",
        boxShadow:"1px 1px 20px beige",
        }}>
           {/* Child profile picture  */}
        
        {props.children}
        {/* component texts */}
        <p style={{
            color:"black",
            fontSize:"20px",
            textShadow: "0 0 3px beige, 0 0 5px beige",
        }}>Fullname: {props.fullName}</p>


<p style={{
            color:"black",
            fontSize:"15px",
            textShadow: "0 0 3px beige, 0 0 5px beige",
        }}>About: {props.About}</p>
        
        
        <p style={{
            color:"black",
            fontSize:"15px",
            textShadow: "0 0 3px beige, 0 0 5px beige",
        }}>Profession: {props.profession}</p>
    
     </div>   

    )
}

Profile.defaultProps = {
    fullName:"insert Fullname",
    
    profession:"Type your profession"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    
    profession: PropTypes.string,
    
}

export default Profile;