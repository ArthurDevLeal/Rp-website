import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-4 left-4 bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-2 rounded-lg shadow-lg flex items-center justify-between"
        >
          <span>{message}</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-neutral-400 hover:text-white transition-colors"
          >
            <IoClose size={18} />
          </button>
        </motion.div>
      )}  
    </AnimatePresence>
  );
}
