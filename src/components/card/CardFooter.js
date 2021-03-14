import React, { useState } from "react";
import Modal from "../modals/VideoModal";

const CardFooter = () => {
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="card__footer">
      <button className="card__link">hey</button>
      <a className="card__link" href="">
        you{" "}
      </a>
      <a className="card__link" href="">
        ok
      </a>
    </div>
  );
};

export default CardFooter;
