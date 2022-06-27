const ease = [0.65, 0, 0.35, 1];
const duration = 1;

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration,
        ease,
      },
    },
  },
  fadeUp: {
    initial: { y: 100 },
    animate: {
      y: 0,
      transition: {
        duration,
        ease,
      },
    },
  },
  fadeInOut: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration,
        ease,
      },
    },
    exit: { opacity: 0 },
  },
  blink: {
    animate: {
      opacity: [0.5, 1],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  },
  arrowLeft: {
    active: { x: 0 },
    inactive: {
      x: [0, -16],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  },
  arrowRight: {
    active: { x: 0 },
    inactive: {
      x: [0, 16],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  },
  staggerParent: {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 2,
      },
    },
  },
  staggerChild: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration, ease } },
  },
  staggerTextParent: {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  staggerTextChild: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};

export default animations;
