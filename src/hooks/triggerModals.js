import { useState, useRef, useEffect } from "react";

export default () => {
  const [trigger, setTrigger] = useState(false);
  const clickRef = useRef();

  const hideModal = () => {
    setTrigger(false);
  };
  const handleClick = () => {
    setTrigger(true);
  };
  const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
      e.preventDefault();
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

  return [trigger, clickRef, handleClick];
};
