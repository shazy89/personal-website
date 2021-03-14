import React, { useState } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Modal from "../modals/VideoModal";

const Card = () => {
  const [trigger, setTrigger] = useState(false);

  const handleClick = () => {
    !trigger ? setTrigger(true) : setTrigger(false);
  };
  return (
    <>
      <div className="card">
        <CardHeading />
        <CardContent />
        <CardFooter handleClick={handleClick} />
      </div>
      {trigger && <Modal />}
    </>
  );
};

export default Card;
