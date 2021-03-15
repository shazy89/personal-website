import React, { lazy, Suspense } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

import triggerModals from "../../hooks/triggerModals";

const Modal = lazy(() => import("../modals/VideoModal"));

const Card = ({ project }) => {
  const [trigger, clickRef, handleClick] = triggerModals();
  // debugger;
  console.log(project);
  return (
    <>
      <div className="col-1-of-2">
        <div className="card" ref={clickRef}>
          <CardHeading images={project.imgs} name={project.name} />
          <CardContent />
          <CardFooter
            handleClick={handleClick}
            mobGithub={project.mobGithub}
            github={project.github}
          />
        </div>
      </div>
      {trigger && (
        <Suspense fallback={<h1>Still Loading…</h1>}>
          {" "}
          <Modal demo={project.demo} name={project.name} />{" "}
        </Suspense>
      )}
    </>
  );
};

export default Card;
