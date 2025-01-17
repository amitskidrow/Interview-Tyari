import React from "react";
import Nav from "./DesktopNav";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="cfooterwrap">
          <p className="cfoottxt">
            {" "}
            Designed and developed by Mr.Amit Kumar- All Rights Reserved ©2021{" "}
          </p>
          <a href="https://www.instagram.com/amit21august/" className="social">
            {" "}
            <InstagramIcon className="cinsta" />
          </a>
          <LinkedInIcon className="clinkedin" />
          <GitHubIcon className="cgithub" />
          <a href="mailto:amitskidrow@gmail.com">
            {" "}
            <MailIcon className="mail" />
          </a>
        </div>
      </div>
    </>
  );
}
