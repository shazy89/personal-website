import React from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

const Card = () => {
  return (
    <div className="card">
      <CardHeading />
      <CardContent />
      <CardFooter />
    </div>
  );
};

export default Card;
