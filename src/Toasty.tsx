import React from "react";
import { motion } from "framer-motion";
import { type Toast, type ToastSlideFrom } from "./ToastContext";
import { CheckCircle, TriangleAlert, XCircle } from "lucide-react";
import { elevationToBoxShadow } from "./utils/elevationToBoxShadow";
import { getSlideAnimation } from "./utils/getSlideAnimation";

interface ToastyProps {
  toast: Toast;
}

const Toasty: React.FC<ToastyProps> = ({ toast }) => {
  if (!toast) return null;

  const {
    message,
    type,
    variant,
    duration = 5,
    spacing,
    disableAnimation = false,
    showProgress,
    slideFrom = "bottom",
    fontSize,
    iconSize,
    elevation,
    sx,
  } = toast;

  const { initial, animate, exit } = getSlideAnimation(
    slideFrom,
    disableAnimation
  );

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      className={`Toasty-container ${type} ${variant}`}
      style={{
        boxShadow: elevationToBoxShadow(elevation),
        ...sx,
      }}
    >
      <div className={`Toasty-message ${spacing}-spacing`} style={{ fontSize }}>
        {toast.type === "error" && <XCircle size={iconSize} />}
        {toast.type === "success" && <CheckCircle size={iconSize} />}
        {toast.type === "warning" && <TriangleAlert size={iconSize} />}
        {message}
      </div>
      {showProgress && (
        <div className="Toasty-progress-container">
          <div
            className={`Toasty-progress-bar ${type}`}
            style={{
              animationDuration: `${
                typeof duration === "number" ? duration : 5
              }s`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Toasty;
