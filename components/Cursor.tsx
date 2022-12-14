import React, { useEffect, useRef } from "react";

const videos = ["/A.mp4", "/B.mp4", "/C.mp4"];

interface Props {
  isActive: boolean | undefined;
  video: number | undefined;
}

const Cursor: React.FC<Props> = ({ isActive, video }) => {
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
        (positionRef.current.x - positionRef.current.xPrev) * 0.04;
      positionRef.current.yPrev +=
        (positionRef.current.y - positionRef.current.yPrev) * 0.04;
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
      <div className="absolute w-4 h-4 bg-white rounded-full top-34 left-34"></div>
      <div
        className={`relative w-full h-full transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <video src={videos[video ? video : 0]} preload="auto" loop autoPlay />
      </div>
    </div>
  );
};

export default Cursor;
