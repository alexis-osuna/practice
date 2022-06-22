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
  fadeInUp: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease,
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
};

export default animations;
