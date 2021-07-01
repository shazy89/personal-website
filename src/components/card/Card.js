import React from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { Parallax } from "react-scroll-parallax";
const Card = ({ project }) => {
  return (
    <>
      <div className="col-1-of-2">
        <Parallax className="custom-class" x={[-10, 10]}>
          <div className="card">
            <CardHeading images={project.imgs} name={project.name} />
            <CardContent
              info={project.info}
              technologiesForIcons={project.technologiesForIcons}
            />
            <CardFooter project={project} />
          </div>
        </Parallax>
      </div>
      {/*trigger && <Modal demo={project.demo} name={project.name} /> */}
    </>
  );
};

export default Card;
