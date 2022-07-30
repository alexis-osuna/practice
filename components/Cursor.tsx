import React, { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/lindsay-lohan.png",
  "/mischa-barton.png",
  "/paris-hilton.png",
];

interface Props {
  isActive: boolean | undefined;
  image: number | undefined;
}

const Cursor: React.FC<Props> = ({ isActive, image }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    x: 0,
    y: 0,
    xPrev: 0,
    yPrev: 0,
  });

  useEffect(() => {
    document.addEventListener("mousemove", ({ clientX, clientY }) => {
      if (cursorRef.current != null) {
        positionRef.current.x = clientX - cursorRef.current.clientWidth / 2;
        positionRef.current.y = clientY - cursorRef.current.clientHeight / 2;
      }
    });
  }, []);

  const animateCursor = () => {
    requestAnimationFrame(animateCursor);
    if (!positionRef.current.xPrev || !positionRef.current.yPrev) {
      positionRef.current.xPrev = positionRef.current.x;
      positionRef.current.yPrev = positionRef.current.y;
    } else {
      positionRef.current.xPrev +=
        (positionRef.current.x - positionRef.current.xPrev) * 0.08;
      positionRef.current.yPrev +=
        (positionRef.current.y - positionRef.current.yPrev) * 0.08;
    }
    if (cursorRef.current != null) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.xPrev}px, ${positionRef.current.yPrev}px, 0)`;
    }
  };

  useEffect(() => {
    animateCursor();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 flex items-center justify-center w-64 h-64 rounded-full pointer-events-none"
    >
      <div className="absolute w-4 h-4 rounded-full top-34 left-34 bg-neutral-50"></div>
      <div
        className={`relative w-full h-full transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          className="rounded-full"
          src={images[image ? image : 0]}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cursor;
