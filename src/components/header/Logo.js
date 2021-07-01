import React from "react";
import Media from "react-media";
import { Parallax } from "react-scroll-parallax";
const Logo = () => {
  return (
    <div className="header__logo-box">
      <Media
        queries={{
          small: "(max-width: 899px)",
          large: "(min-width: 900px)"
        }}
      >
        {(matches) => (
          <>
            <Parallax className="custom-class" x={[-20, 20]} tagOuter="figure">
              {" "}
              {matches.small && (
                <img
                  src="https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_350/v1615476201/ES-logos_black_opvfah.png"
                  alt="Logo"
                  className="header__logo"
                />
              )}
              {matches.large && (
                <img
                  src="https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_200/v1615476201/ES-logos_black_opvfah.png"
                  alt="Logo"
                  className="header__logo"
                />
              )}
            </Parallax>
          </>
        )}
      </Media>
    </div>
  );
};

export default Logo;
