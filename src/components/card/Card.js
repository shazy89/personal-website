import React, { useState, useRef, useEffect } from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Modal from "../modals/VideoModal";

const Card = () => {
  const [trigger, setTrigger] = useState(false);
  const clickRef = useRef();

  const handleClick = () => {
    setTrigger(true);
  };
  const hideModal = () => {
    setTrigger(false);
  };
  const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };
  useClickOutside(clickRef, hideModal);
  return (
    <>
      <div className="card" ref={clickRef}>
        <CardHeading />
        <CardContent />
        <CardFooter handleClick={handleClick} />
      </div>
      {trigger && <Modal />}
    </>
  );
};

export default Card;
