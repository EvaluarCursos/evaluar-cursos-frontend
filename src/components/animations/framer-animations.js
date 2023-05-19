export const SLIDE = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.2,
  },
};

export const FADE_DROPDOWN = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const DROPDOWN = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -200,
  },
  transition: {
    type: "spring",
    duration: 0.5,
  },
};
