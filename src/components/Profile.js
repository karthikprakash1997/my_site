import React from "react";
import "../App.css";
import { ReactComponent as Git } from "../assets/svg/media/github.svg";
import { ReactComponent as Fb } from "../assets/svg/media/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/svg/media/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/svg/media/twitter.svg";
import { ReactComponent as Mail } from "../assets/svg/media/gmail.svg";
import { ReactComponent as Maps } from "../assets/svg/media/maps.svg";
import { Image } from "react-bootstrap";

const Profile = props => {
  const profileObj = props.profileData;
  return (
    <div>
      <div className="image1">
        <Image
          src={require("../karthik.png")}
          roundedCircle
          style={{ height: 245 }}
        />
      </div>
      <h1 className="text-center">{profileObj.name}</h1>
      <h2 className="text-center">{profileObj.label}</h2>
      <div className="divider"></div>

      <ul className="list-unstyled contact-links text-center">
        <li>
          <i>
            <Maps />
          </i>
          <i> </i>
          {profileObj.location.city}, {profileObj.location.region},{" "}
          {profileObj.location.countryCode}
        </li>
        <li>
          <i className="fb">
            <Mail />
            <i> </i>
          </i>
          <a href={`mailto:${profileObj.email}`}>{profileObj.email}</a>
        </li>
      </ul>
      <div className="divider"></div>
      <div className="cn">
        <div className="sm">
          <a href="https://www.linkedin.com/in/karthik-prakash-s" target="_blank" rel="noopener noreferrer">
            <Linkedin className="Hover" />
          </a>
          <a href="https://github.com/karthikprakash1997" target="_blank" rel="noopener noreferrer">
            <Git className="Hover" />
          </a>
          <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Fb className="Hover" />
          </a>
          <a href="www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="Hover" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
