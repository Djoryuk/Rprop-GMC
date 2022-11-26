import  React  from "react";

import PropTypes from 'prop-types';


export default function Profile(props) {
    function handleName(){
        alert(props.fullName)
    }
    return (
        <div className="card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={props.children}  alt="photo.jpg" width={50} height={50}/>
                </div>
            </div>
            <div className="lower-container">
            <h5  onMouseOver={handleName}>{props.fullName}</h5>
            <h4>{props.bio}</h4>
            <p>{props.profession}</p>
            </div>
        </div>
    );
  }
  Profile.defaultProps = {
    fullName: "abdeldjallil",
    bio: "Hey ! i am abdel djallil im learning Full sztack web developpment ",
    profession: "FullStack Web Developper"
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};
 
  