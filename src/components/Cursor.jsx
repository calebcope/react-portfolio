import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  const outerSize = 120;
  const innerSize = 105;

  return (
    <div
      className="pointer-events-none fixed z-[1] flex items-center justify-end rounded-full bg-[#E2BA86]/50 shadow-inner shadow-[#563517]/50"
      style={{
        left: `${position.x - outerSize / 2}px`,
        top: `${position.y - outerSize / 2}px`,
        width: `${outerSize}px`,
        height: `${outerSize}px`,
      }}
    >
      <div
        className="mr-1 rounded-full shadow-sm shadow-[#563517]/50 texture-overlay"
        style={{
          width: `${innerSize}px`,
          height: `${innerSize}px`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
