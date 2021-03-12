import { useState } from "react";

export default () => {
  const [trigger, setTriger] = useState(false);
  const [animations, setAnimations] = useState({
    animationFinished: true,
    showAnimationStartLabel: false,
  });
  const triggerAnimation = () => (trigger ? setTriger(false) : setTriger(true));

  const onAnimationStart = () => {
    setAnimations({
      animationFinished: false,
      showAnimationStartLabel: true,
    });
  };

  const onAnimationEnd = () => {
    setAnimations({
      animationFinished: true,
      showAnimationStartLabel: false,
    });
    setTriger(false);
  };
  return [triggerAnimation, onAnimationStart, onAnimationEnd, trigger];
};
