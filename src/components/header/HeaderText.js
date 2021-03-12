import React, { useState } from "react";

const HeaderText = () => {
  const [isVisible, setIsVisible] = useState("");
  const [visible, setVisible] = useState("heading-text__second-2");
  return (
    <div
      className="heading-text__box"
      style={{ position: "absolute", top: "50%", left: "50%" }}
    >
      <h1 className="heading-text__parent">
        <span
          className={`heading-text__first ${isVisible}  u-margin-bottom-medium`}
          onAnimationStart={(e) => setIsVisible("")}
          onAnimationEnd={(e) => setIsVisible("heading-text__first-1")}
        >
          HEY! I'm Ed
        </span>
        <span className={`heading-text__second ${visible}`}>
          {" "}
          I am a FULL STACK WEB DEVELOPER{" "}
        </span>
      </h1>
    </div>
  );
};

export default HeaderText;
