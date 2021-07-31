import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 3) / 60,
  (x - rect.left - rect.width / 3) / 60,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AnimatedCard({ children }) {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);

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
        <div className="col-1-of-2">{children}</div>
      </animated.div>
    </div>
  );
}
export default AnimatedCard;
