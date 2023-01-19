import React from "react";
import PropTypes from "prop-types";

const ProfilePic = (props) =>{
    return(
    <img style={{
        width: 150,
        borderRadius:"10%",
        marginLeft:"35%",
        border:"1px solid beige",
       
    }} src={props.imagePath}alt="0"/>
    )
}
ProfilePic.propTypes = {
    imagePath: PropTypes.string,
}
export default ProfilePic