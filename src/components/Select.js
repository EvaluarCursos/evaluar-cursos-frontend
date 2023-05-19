import React, { cloneElement, useState } from "react";
import Icon from "./icons/Icon";
import "./Select.css";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_DROPDOWN } from "./animations/framer-animations";

export const SelectOption = ({ text, value, onClick }) => {
  return (
    <div
      className="dropdown-select-option"
      onClick={() => onClick(text, value)}
    >
      <p>{text}</p>
    </div>
  );
};

const Select = ({ children, setter, defaultText, style }) => {
  function handleChange(text, value) {
    setSelected(text);
    setter(value);
    setOpen(false);
  }

  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState(defaultText ?? "");

  return (
    <div className="dropdown-select" style={style}>
      <p>{selected}</p>
      <Icon
        className="dropdown-select-icon"
        icon="selector"
        onClick={() => setOpen(!open)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown-options-container"
            variants={FADE_DROPDOWN}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {Array.isArray(children)
              ? children.map((item) =>
                  cloneElement(item, { onClick: handleChange })
                )
              : typeof children !== "undefined" &&
                cloneElement(children, { onClick: handleChange })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
