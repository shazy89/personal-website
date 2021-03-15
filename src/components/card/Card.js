import React, { lazy, Suspense } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Modal from "../../hooks/triggerModals";
import triggerModals from "../../hooks/triggerModals";

//const Modal = lazy(() => import("../modals/VideoModal"));

const Card = ({ project }) => {
  // const [trigger, clickRef, handleClick] = triggerModals();
  // console.log(trigger);
  //ref={clickRef}
  // handleClick={handleClick}
  return (
    <>
      <div className="col-1-of-2">
        <div className="card">
          <CardHeading images={project.imgs} name={project.name} />
          <CardContent info={project.info} />
          <CardFooter
            mobGithub={project.mobGithub}
            github={project.github}
            demo={project.demo}
          />
        </div>
      </div>
      {/*trigger && <Modal demo={project.demo} name={project.name} /> */}
    </>
  );
};

export default Card;
