import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Icon from "./icons/Icon";
import "./Notification.css";
import { AnimatePresence, motion } from "framer-motion";
import { DROPDOWN } from "./animations/framer-animations";

const Notification = forwardRef(({ type }, ref) => {
  useImperativeHandle(ref, () => ({
    show(message) {
      setMessage(message);
    },
  }));

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className={`notification ${type}`}
          variants={DROPDOWN}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={DROPDOWN.transition}
        >
          <Icon
            icon={type === "success" ? "circleCheckFilled" : "circleXFilled"}
          />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Notification;
