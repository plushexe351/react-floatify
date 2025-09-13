import React from "react";
import { motion } from "framer-motion";
import { type Toast } from "./ToastContext";
import { CheckCircle, TriangleAlert, XCircle } from "lucide-react";
import { elevationToBoxShadow } from "./utils/elevationToBoxShadow";

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
    disableAnimation,
    showProgress,
    fontSize,
    iconSize,
    elevation,
    sx,
  } = toast;

  return (
    <motion.div
      initial={disableAnimation ? {} : { opacity: 0, y: 100, scale: 0.8 }}
      animate={disableAnimation ? {} : { opacity: 1, y: 0, scale: 1 }}
      exit={disableAnimation ? {} : { opacity: 0, y: 50 }}
      className={`Toasty-container ${type} ${variant}`}
      style={{ ...sx }}
    >
      <div
        className="Toasty-message"
        style={{
          fontSize: fontSize,
          boxShadow: elevationToBoxShadow(elevation),
        }}
      >
        {toast.type === "default" && ""}
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
