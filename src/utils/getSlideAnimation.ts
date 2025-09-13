import type { ToastSlideFrom } from "../ToastContext";


export const getSlideAnimation = (
  slideFrom: ToastSlideFrom,
  disableAnimation: boolean
) => {
  if (disableAnimation) return { initial: {}, animate: {}, exit: {} };

  const distance = 100;

  switch (slideFrom) {
    case "left":
      return {
        initial: { opacity: 0, x: -distance, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -distance / 2 },
      };
    case "right":
      return {
        initial: { opacity: 0, x: distance, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: distance / 2 },
      };
    case "top":
      return {
        initial: { opacity: 0, y: -distance, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -distance / 2 },
      };
    case "bottom":
    default:
      return {
        initial: { opacity: 0, y: distance, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: distance / 2 },
      };
  }
};