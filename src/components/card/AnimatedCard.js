import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
//import { useControls } from "leva";
const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2.3) / 5,
  (x - rect.left - rect.width / 2.3) / 5,
  1.2
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AnimatedCard({ children }) {
  // const configList = Object.keys(config);
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  // const { preset } = useControls({
  //   preset: { value: "default", options: configList }
  // });

  const props = useSpring({ xys, config: config["slow"] });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        {children}
      </animated.div>
    </div>
  );
}
export default AnimatedCard;
