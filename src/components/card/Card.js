import React, { useState, useRef, useEffect } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Modal from "../modals/VideoModal";
import triggerModals from "../../hooks/triggerModals";

const Card = () => {
  const [trigger, clickRef, handleClick] = triggerModals();

  return (
    <>
      <div className="col-1-of-2">
        <div className="card" ref={clickRef}>
          <CardHeading />
          <CardContent />
          <CardFooter handleClick={handleClick} />
        </div>
      </div>
      {trigger && <Modal />}
    </>
  );
};

export default Card;
