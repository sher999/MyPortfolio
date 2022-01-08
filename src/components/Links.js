import React from "react";
import "./Links.css";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const Links = () => {
  return (
    <div className="links">
      <MDBContainer>
        <MDBBtn social="fb">
          <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
        </MDBBtn>
        <MDBBtn social="tw">
          <MDBIcon fab icon="twitter" className="pr-1" /> Twitter
        </MDBBtn>
        <MDBBtn social="gplus">
          <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google +
        </MDBBtn>
        <MDBBtn social="li">
          <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
        </MDBBtn>
        <MDBBtn social="ins">
          <MDBIcon fab icon="instagram" className="pr-1" /> Instagram
        </MDBBtn>
        <MDBBtn social="pin">
          <MDBIcon fab icon="pinterest" className="pr-1" /> Pinterest
        </MDBBtn>
        <MDBBtn social="yt">
          <MDBIcon fab fab icon="youtube" className="pr-1" /> Youtube
        </MDBBtn>
        <MDBBtn social="vk">
          <MDBIcon fab icon="vk" className="pr-1" /> Vkontakte
        </MDBBtn>
        <MDBBtn social="so">
          <MDBIcon fab icon="stack-overflow" className="pr-1" /> Stack Overflow
        </MDBBtn>
        <MDBBtn social="slack">
          <MDBIcon fab icon="slack" className="pr-1" /> Slack
        </MDBBtn>
        <MDBBtn social="git">
          <MDBIcon fab icon="github" className="pr-1" /> Github
        </MDBBtn>
        <MDBBtn social="comm">
          <MDBIcon icon="comments" className="pr-1" /> Comments
        </MDBBtn>
        <MDBBtn social="email">
          <MDBIcon icon="envelope" className="pr-1" /> Email
        </MDBBtn>
        <MDBBtn social="dribbble">
          <MDBIcon icon="dribbble" className="pr-1" /> Dribbble
        </MDBBtn>
      </MDBContainer>
    </div>
  );
};

export default Links;
