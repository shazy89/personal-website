import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import triggerAnimations from "../../hooks/triggerAnimations";

const Icons = () => {
  const [triggerAnimation, onAnimationStart, onAnimationEnd, trigger] =
    triggerAnimations();
  return (
    <div className="header__socialmedia-icons">
      <a
        onClick={triggerAnimation}
        className={`header__socialmedia-link ${trigger && "triger-animation"}`}
        href="mailto:erdo.shazy123@gmail.com"
        onAnimationEnd={onAnimationEnd}
        onAnimationStart={onAnimationStart}
      >
        <EmailIcon style={{ fontSize: "4.3rem" }} />
      </a>

      <a
        className="header__socialmedia-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/shazy89"
      >
        <GitHubIcon style={{ fontSize: "4.3rem" }} />
      </a>

      <a
        className="header__socialmedia-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/erdoan-ed-shaziman-0533611b9/"
      >
        <LinkedInIcon style={{ fontSize: "4.3rem" }} />
      </a>
      <a
        className="header__socialmedia-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/shazys"
      >
        <FacebookIcon style={{ fontSize: "4.3rem" }} />
      </a>
      <a
        className="header__socialmedia-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/shazyoh/"
      >
        <InstagramIcon style={{ fontSize: "4.3rem" }} />
      </a>
    </div>
  );
};

export default Icons;
