import { motion, useMotionValue, useTransform } from "framer-motion";
import ArrowDownSVG from "../../icons/ArrowDownSVG";
import "./CoolButton.css";
function ButtonComponent({
  text,
  href,
  disableCoolEffect = false,
}: {
  text: string;
  href: string;
  disableCoolEffect?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(255, 255, 255, 0.1), transparent 80%)`
  );

  return (
    <motion.a
      className="button"
      href={href}
      onMouseMove={handleMouseMove}
      style={{ background: disableCoolEffect ? "transparent" : background }}
    >
      {text}
      {!disableCoolEffect && (
        <div className="icon">
          <ArrowDownSVG fill="white" />
        </div>
      )}
    </motion.a>
  );
}

export default ButtonComponent;
