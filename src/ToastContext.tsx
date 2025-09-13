import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import Toasty from "./Toasty";
import { AnimatePresence } from "framer-motion";
import "./Toasty.scss";

export type ToastType = "default" | "success" | "error" | "warning";
export type Position =
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right"
  | "top center"
  | "bottom center";
export type ToastVariant = "regular" | "outlined" | "contained";

export interface ToastOptions {
  type?: ToastType;
  variant?: ToastVariant;
  duration?: number;
  disableAnimation?: boolean;
  showProgress?: boolean;
  fontSize?: string | number;
  iconSize?: number;
  sx?: React.CSSProperties;
}

export interface Toast extends ToastOptions {
  id: number;
  message: string;
}

interface ToastContextProps {
  addToast: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
  position?: Position;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "bottom center",
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, options: ToastOptions = {}) => {
    const {
      type = "default",
      duration = 5,
      variant = "regular",
      disableAnimation = false,
      showProgress = true,
      fontSize = 14,
      iconSize = 17,
      sx = {},
    } = options;

    const id = Date.now();
    const toast: Toast = {
      id,
      message,
      type,
      variant,
      duration,
      disableAnimation,
      showProgress,
      fontSize,
      iconSize,
      sx,
    };

    setToasts((prev) => [...prev, toast]);
    setTimeout(() => removeToast(id), duration * 1000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className={`Toasty-stack-modal ${position}`}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toasty key={toast.id} toast={toast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
