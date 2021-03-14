import React, { useState } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Modal from "../modals/VideoModal";

const Card = () => {
  const [trigger, setTrigger] = useState(true);
  return (
    <div className="card">
      <CardHeading />
      <CardContent />
      <CardFooter />
    </div>
  );
};

export default Card;
