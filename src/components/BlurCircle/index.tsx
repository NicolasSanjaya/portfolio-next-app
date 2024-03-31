import React from "react";

const BlurCircle = ({ className }: { className: string }) => {
  return (
    <div
      className={`w-40 h-40 lg:w-96 lg:h-96 rounded-full blur-xl backdrop-blur-2xl opacity-25 ${className}`}
    ></div>
  );
};

export default BlurCircle;
